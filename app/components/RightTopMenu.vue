<template>
  <div class="flex justify-center items-center gap-4 text-base">
    <el-icon>
      <QuestionFilled style="cursor: pointer" @click="showLabels" />
    </el-icon>
    <DarkToggle :label="$t(DarkToggleLabel)" />
    <GitHubLink :label="$t(GitHubLinkLabel)" />
    <Practice :label="$t(PracticeLabel)" />
    <MockTest :label="$t(MockTestLabel)" />
    <Language :label="$t(LanguageLabel)" />
  </div>
</template>


<script setup>

import { QuestionFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const DarkToggleLabel = ref('')
const GitHubLinkLabel = ref('')
const PracticeLabel = ref('')
const MockTestLabel = ref('')
const LanguageLabel = ref('')



function showLabels() {
  DarkToggleLabel.value = "button.color_mode"
  GitHubLinkLabel.value = "Github"
  PracticeLabel.value = "text.practice_mode"
  MockTestLabel.value = "text.mock_test_mode"
  LanguageLabel.value = "language"


  setTimeout(() => {
    hideLabels()
  }, 2000);
}

function hideLabels() {
  DarkToggleLabel.value = "_.empty_str"
  GitHubLinkLabel.value = "_.empty_str"
  PracticeLabel.value = "_.empty_str"
  MockTestLabel.value = "_.empty_str"
  LanguageLabel.value = "_.empty_str"
}

</script>
