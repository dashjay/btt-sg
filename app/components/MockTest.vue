<script setup lang="ts">

import { Select } from '@element-plus/icons-vue'

const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>


  <el-tooltip class="box-item" effect="dark" content="MockTestMode" placement="bottom-start">
    <button class="inline-flex justify-center items-center" @click="toggleDark">
      <el-icon><Select /></el-icon>
    </button>
  </el-tooltip>
</template>
