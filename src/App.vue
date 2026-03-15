<script setup>
import { ref, computed } from 'vue'
import GroupEditor from './components/GroupEditor.vue'
import Game from './components/Game.vue'

// shared data
const sharedGroups = ref({})

// start on the setup screen
const currentView = ref('editor')

const canPlay = computed(() => {
  const categoriesWithTwoOrMore = Object.values(sharedGroups.value).filter(group => group.length >= 2)
  return categoriesWithTwoOrMore.length >= 2
})
</script>

<template>
  <div>

    <div v-if="currentView === 'editor'">
      <GroupEditor :groups="sharedGroups" />

      <div class="play-container">
        <button class="play-button" :disabled="!canPlay" :title="!canPlay ? 'Needs at least 2 categories with 2 or more items' : ''"
          @click="currentView = 'project'">
          Play !
        </button>
      </div>
    </div>

    <div v-if="currentView === 'project'">
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
.play-container {
  text-align: center;
  margin: 40px 0;
}

.play-button {
  padding: 15px 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>