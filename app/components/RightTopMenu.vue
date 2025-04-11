<template>
  <div class="flex justify-center items-center gap-4 text-base">
    <el-icon>
      <QuestionFilled style="cursor: pointer" @click="switchLabelSow" />
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


const showLabel = ref(false)

function switchLabelSow() {
  if (showLabel.value) {
    DarkToggleLabel.value = ''
    GitHubLinkLabel.value = ''
    PracticeLabel.value = ''
    MockTestLabel.value = ''
    LanguageLabel.value = ''
    showLabel.value = false
  } else {
    DarkToggleLabel.value = "button.color_mode"
    GitHubLinkLabel.value = "Github"
    PracticeLabel.value = "text.practice_mode"
    MockTestLabel.value = "text.mock_test_mode"
    LanguageLabel.value = "language"
    showLabel.value = true
  }
}

</script>
