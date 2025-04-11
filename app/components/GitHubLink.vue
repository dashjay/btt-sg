<script setup lang="ts">
import { repository } from "~/../package.json";

interface Props {
  label?: string;
}
const props = defineProps<Props>();


</script>

<template>
  <a class="inline-flex justify-center items-center dark:text-white" :href="repository.url" target="_blank">
    <div i-ri-github-line /> <el-text v-if="props.label !== ''"> {{ props.label }}</el-text>
  </a>
</template>
