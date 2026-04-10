<script setup>
import { ref, onMounted, watch } from 'vue'

const STORAGE_KEY = 'groupology-data'

const props = defineProps({
    groups: Object
})

const items = ref([])
const score = ref(0)
const mistakes = ref(0)
const selectedItem = ref(null)

const group_amount = Object.keys(props.groups).length

function shuffle(array) {
    // from https://stackoverflow.com/a/12646864
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function deselect() {
    selectedItem.value = null
}

function selectItem(item) {
    if (selectedItem.value == null) {
        selectedItem.value = item
    } else if (item === selectedItem.value) {
        // select same item -> deselect
        deselect()
    } else { // 2 items selected
        if (item.category === selectedItem.value.category) { // both items in the same category -> merge
            score.value++
            item.names.push(...selectedItem.value.names)

            const indexToRemove = items.value.indexOf(selectedItem.value)
            if (indexToRemove > -1) {
                items.value.splice(indexToRemove, 1)
            }

            watch(items, (val) => { 
                localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
            }, { deep: true })
        } else { // both items in different categories
            mistakes.value++
        }
        deselect()
    }
}

function initializeGame() {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved) {
        // Restore from localStorage directly, skip recomputing from props
        items.value = JSON.parse(saved)
        return
    }

    const flatItems = []

    for (const [categoryName, groupData] of Object.entries(props.groups)) {
        const elements = groupData.items

        // Skip empty categories
        if (elements.length === 0) continue

        // Create an object for each element
        elements.forEach((el, index) => {
            flatItems.push({
                id: `${categoryName}-${index}`, // Give it a unique ID
                category: categoryName,
                names: [el], // Start with just itself
                targetSize: elements.length, // Store how big this specific group needs to get
                color: groupData.color
            })
        })
    }
    shuffle(items.value)
    items.value = flatItems

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value))
}

// Start the game when the component appears on screen!
onMounted(() => {
    initializeGame()
})
</script>

<template>
    <p>
        Make {{ group_amount }} groups ! (By combining two at a time.)
        Score: {{ score }} Mistakes: {{ mistakes }}
    </p>

    <div v-if="items.length > 0">
        <span v-for="item in items" :key="item.id">
            <button class="item-button" :class="{
                'selected': item === selectedItem,
                'bold': item.names.length > 1
            }" :style="item.names.length >= item.targetSize ? { backgroundColor: item.color } : {}"
                :title="item.names.join('\n')" :disabled="item.names.length >= item.targetSize"
                @click="selectItem(item)">
                <template v-if="item.names.length >= item.targetSize">
                    {{ item.category }}
                </template>
                <template v-else>
                    {{ item.names.slice(0, 3).join('\n') }}
                    <span v-if="item.names.length > 3"><br />...</span>
                    <span v-if="item.names.length > 2" class="count-text"><br /> [{{ item.names.length }} / {{
                        item.targetSize }}]</span>
                </template>
            </button>
        </span>
    </div>
</template>

<style scoped>
.item-button {
    white-space: pre-line;
    margin: 5px;
}

.item-button.selected {
    background-color: black;
    color: white;
    border-color: white;
}

.bold {
    font-weight: bold;
}

.count-text {
    color: red;
}
</style>