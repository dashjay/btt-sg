<template>


  <el-dropdown placement="bottom">
    <button class="inline-flex justify-center items-center">
      <el-icon>
        <Orange />
      </el-icon>
    </button>
    <template #dropdown>

      <form>
          <select id="locale-select" v-model="$i18n.locale">
            <option value="en">en</option>
            <option value="fr">fr</option>
            <option value="ja">ja</option>
            <option value="zhcn">zh-cn</option>
            <option value="zhtw">zh-tw</option>
          </select>
        </form>
    </template>
  </el-dropdown>


</template>

<script lang="ts" setup>
import { Orange } from '@element-plus/icons-vue'

</script>