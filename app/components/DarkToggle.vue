<script setup lang="ts">

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
    <div class="i-ri-sun-line dark:i-ri-moon-line" /> <el-text v-if="props.label !== ''"> {{ props.label }}</el-text>
  </button>
</template>
