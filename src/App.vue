<script setup>
import { ref, computed } from 'vue'
import GroupEditor from './components/GroupEditor.vue'
import Game from './components/Game.vue'

// shared data
const sharedGroups = ref({})

// start on the setup screen
const currentView = ref('editor')

const requireEqualSizes = ref(false)

const importCode = ref('')
const shareCode = ref('')
const copyMessage = ref('')

async function generateShareCode() {
  try {
    const jsonString = JSON.stringify(sharedGroups.value)
    const compressed = new Blob([jsonString]).stream()
      .pipeThrough(new CompressionStream("gzip"))
    shareCode.value = (await new Response(compressed).bytes()).toBase64() 
    copyMessage.value = ''
  } catch (e) {
    alert("Error generating share code.")
  }
}

async function copyToClipboard() {
  if (!shareCode.value) return
  try {
    await navigator.clipboard.writeText(shareCode.value)
    copyMessage.value = "Copied!"
    setTimeout(() => { copyMessage.value = '' }, 2000)
  } catch (err) {
    alert("Failed to copy to clipboard. You can select the text and copy it manually.")
  }
}

async function loadFromCode(playImmediately) {
  if (!importCode.value.trim()) return
  
  try {
    // decode from gzipped Base64
    const compressed = Uint8Array.fromBase64(importCode.value.trim())
    const decompressed = new Blob([compressed]).stream()
      .pipeThrough(new DecompressionStream("gzip"))
    const parsedData = await new Response(decompressed).json()

    // apply to groups
    sharedGroups.value = parsedData
    importCode.value = '' // clear input field

    // go straight to the game if requested
    if (playImmediately) {
      currentView.value = 'project'
    }
  } catch (e) {
    alert("Invalid share code! Please check what you pasted.")
  }
}

const canPlay = computed(() => {
  const groups = Object.values(sharedGroups.value)
  
  const categoriesWithTwoOrMore = groups.filter(group => group.items.length >= 2)
  if (categoriesWithTwoOrMore.length < 2) {
    return false
  }

  if (requireEqualSizes.value) {
    if (groups.length === 0) return false
    const firstGroupSize = groups[0].items.length
    const allSameSize = groups.every(group => group.items.length === firstGroupSize)
    
    if (!allSameSize) return false
  }

  return true
})

const playTooltip = computed(() => {
  if (canPlay.value) return ''

  const groups = Object.values(sharedGroups.value)
  const categoriesWithTwoOrMore = groups.filter(group => group.items.length >= 2)

  if (categoriesWithTwoOrMore.length < 2) {
    return 'Needs at least 2 categories with 2 or more items'
  }

  if (requireEqualSizes.value) {
    return 'All categories must have the exact same number of items'
  }

  return ''
})

</script>

<template>
  <div>

    <div v-if="currentView === 'editor'">

      <div class="data-panel">

        <div class="data-section">
          <h3>Load groups</h3>
          <div class="input-row">
            <input type="text" v-model="importCode" placeholder="Paste code here..." class="code-input">
          </div>
          <div class="action-row">
            <button @click="loadFromCode(true)">Play from code</button>
            <button @click="loadFromCode(false)">Load (edit mode)</button>
          </div>
        </div>

        <div class="data-section">
          <h3>Save groups</h3>
          <div class="action-row">
            <button @click="generateShareCode">
              Generate code
            </button>
          </div>

          <div v-if="shareCode" class="share-output">
            <input type="text" :value="shareCode" readonly class="code-input readonly-input">
            <button @click="copyToClipboard">Copy</button>
            <span>{{ copyMessage }}</span>
          </div>
        </div>
      </div>

      <div class="play-container">
        <div class="options-container">
          <label>
            <input class="equal-size-check" type="checkbox" v-model="requireEqualSizes">
            All categories must be the same size
          </label>
        </div>

        <button class="play-button" :disabled="!canPlay" :title="playTooltip" @click="currentView = 'project'">
          Play !
        </button>
      </div>

      <GroupEditor :groups="sharedGroups" />
    </div>

    <div v-if="currentView === 'project'">
      <button @click="currentView = 'editor'">← Back to Editor</button>
      <Game :groups="sharedGroups" />
    </div>

  </div>
</template>

<!-- global style -->
<style>
* {
  font-family: sans-serif;
}
</style>

<style scoped>

.data-panel {
  display: flex;
  gap: 30px;
  background: #f4f7f6;
  padding: 20px;
  border-radius: 8px;
}

.data-section {
  flex: 1;
}

.input-row {
  margin-bottom: 10px;
}

.action-row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.code-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: monospace;
}

.readonly-input {
  background-color: #e9ecef;
  color: #495057;
  flex: 1;
}

.share-output {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  align-items: center;
}

.play-container {
  text-align: center;
  margin-bottom: 10px 0;
  background: #ddd;
  border-radius: 4px;
}

.equal-size-check {
  margin-top: 20px;
}

.options-container {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.options-container label,
.options-container input {
  cursor: pointer;
  margin-right: 8px;
}

.play-button {
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

</style>