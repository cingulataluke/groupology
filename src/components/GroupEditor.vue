<script setup>
import { ref } from 'vue'

const props = defineProps({
    groups: Object
})

const currentGroupKey = ref(null)
const newCategoryName = ref('')
const isFetching = ref(false)
const sparqlQuery = ref(`SELECT ?itemLabel WHERE {
  ?item wdt:P31 wd:Q16398.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 10`)

function selectGroup(key) {
    currentGroupKey.value = key
}

function addItem() {
    props.groups[currentGroupKey.value].push('New Item')
}

function removeItem(index) {
    props.groups[currentGroupKey.value].splice(index, 1)
}

function addCategory() {
    const name = newCategoryName.value.trim()
    if (name && !props.groups[name]) {
        props.groups[name] = []
        currentGroupKey.value = name
        newCategoryName.value = ''
    }
}

async function populateFromWikidata() {
    if (!currentGroupKey.value) return
    isFetching.value = true

    try {
        const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparqlQuery.value)}`
        const response = await fetch(url, { headers: { 'Accept': 'application/sparql-results+json' } })
        const data = await response.json()

        const newItems = data.results.bindings.map(binding => binding.itemLabel.value)
        props.groups[currentGroupKey.value].push(...newItems)
        props.groups[currentGroupKey.value] = [...new Set(props.groups[currentGroupKey.value])]
    } catch (error) {
        alert("Failed to fetch from Wikidata.")
    } finally {
        isFetching.value = false
    }
}
</script>

<template>
    <div class="group-editor">
        
        <div class="add-category-panel">
            <strong>Add New Category : </strong>
            <input v-model="newCategoryName" @keyup.enter="addCategory">
            <button class="btn" @click="addCategory">Add</button>
        </div>

        <div class="categories-list">
            <span v-for="(items, key) in groups" :key="key" class="category-item">
                <button 
                    class="btn" 
                    :class="{ 'active-category': currentGroupKey === key }"
                    @click="selectGroup(key)"
                >
                    {{ key }} ({{ items.length }})
                </button>
            </span>
        </div>

        <div v-if="currentGroupKey" class="editor-layout">
            
            <div class="manual-column">
                <h3>Editing: {{ currentGroupKey }}</h3>
                <div v-for="(element, index) in groups[currentGroupKey]" :key="index" class="item-row">
                    <input v-model="groups[currentGroupKey][index]">
                    <button class="btn remove-item-btn" @click="removeItem(index)">X</button>
                </div>
                <button class="btn add-item-btn" @click="addItem">+ Add Item</button>
            </div>

            <div class="wikidata-column">
                <h3>Populate via Wikidata</h3>
                <textarea class="sparql-input" v-model="sparqlQuery" rows="6"></textarea>
                <button class="btn" @click="populateFromWikidata" :disabled="isFetching">
                    {{ isFetching ? 'Fetching...' : 'Run Query' }}
                </button>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.add-category-panel {
    margin-bottom: 20px; 
    padding: 10px; 
    background: #eee;
    border-radius: 4px;
}

.categories-list {
    margin-bottom: 20px;
}

.category-item {
    margin-right: 5px;
}

.active-category {
    font-weight: bold;
}

.editor-layout {
    display: flex; 
    gap: 20px;
}

.manual-column {
    flex: 1;
}

.item-row {
    margin-bottom: 5px;
}

.remove-item-btn {
    margin-left: 5px;
}

.add-item-btn {
    margin-top: 10px;
}

.wikidata-column {
    flex: 1; 
    padding: 15px; 
    border: 1px solid #ccc; 
    background: #f9f9f9;
    border-radius: 4px;
}

.sparql-input {
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box; /* prevents text area from breaking out of the container */
    resize: vertical; /* allows user to make it taller, but not wider */
}
</style>