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


const empty_str = "_.empty_str"
const DarkToggleLabel = ref(empty_str)
const GitHubLinkLabel = ref(empty_str)
const PracticeLabel = ref(empty_str)
const MockTestLabel = ref(empty_str)
const LanguageLabel = ref(empty_str)



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
  DarkToggleLabel.value = empty_str
  GitHubLinkLabel.value = empty_str
  PracticeLabel.value = empty_str
  MockTestLabel.value = empty_str
  LanguageLabel.value = empty_str
}

</script>
