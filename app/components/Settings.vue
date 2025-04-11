<template>


  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-icon>
        <Setting />

      </el-icon><el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <DarkToggle :label="$t('button.color_mode')" />
        </el-dropdown-item>
        <el-dropdown-item>
          <GitHubLink label="Github" />
        </el-dropdown-item>
        <el-dropdown-item>
          <Practice :label="$t('text.practice_mode')" />
        </el-dropdown-item>
        <el-dropdown-item>
          <MockTest :label="$t('text.mock_test_mode')" />
        </el-dropdown-item>
        <el-dropdown-item>
          <Language :label="$t('language')"/>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>

<script setup>
import {
  Setting,
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus
} from '@element-plus/icons-vue'
</script>