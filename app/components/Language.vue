<template>


  <el-dropdown placement="bottom" trigger="click">
    <button class="inline-flex justify-center items-center">
      <el-icon>
        <Orange />
      </el-icon>
      <el-text v-if="props.label !== ''"> {{ props.label }}</el-text>
    </button>

    <template #dropdown>
      <el-select v-model="$i18n.locale" placeholder="Select" size="large" style="width: 240px">
        <el-option label="en" value="en">en</el-option>
        <el-option label="fr" value="fr">fr</el-option>
        <el-option label="ja" value="ja">ja</el-option>
        <el-option label="zhcn" value="zhcn">zh-cn</el-option>
        <el-option label="zhtw" value="zhtw">zh-tw</el-option> 
      </el-select>

    </template>
  </el-dropdown>


</template>

<script lang="ts" setup>
import { Orange } from '@element-plus/icons-vue'
import { defineProps } from 'vue';

interface Props {
  label?: string;
}

const props = defineProps<Props>();

</script>