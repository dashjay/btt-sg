<script setup lang="ts">

import { Select } from '@element-plus/icons-vue'

interface Props {
  label?: string;
}

const props = defineProps<Props>();

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


  <button class="inline-flex justify-center items-center" @click="toggleDark">
    <el-icon><Select /></el-icon>
    <el-text v-if="props.label !== ''"> {{ props.label }}</el-text>
  </button>

</template>
