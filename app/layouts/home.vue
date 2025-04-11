<template>
  <main class="px-0 py-10 text-center">
    <RightTopMenu v-if="!isSmallWidth" class="absolute top-4 right-4" />
    <LeftTopMenu v-if="isSmallWidth" class="absolute top-4 left-4" />

    <slot />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      Copyright © 2025 by BBT-SG. All Rights Reserved.
    </div>
  </main>
</template>


<script setup>

import { ref } from 'vue'
const isSmallWidth = ref(false)


onMounted(() => {
  window.onresize = () => {
    return (() => {
      console.log(window.innerWidth)
      isSmallWidth.value = (window.innerWidth < 800)
    })();
  };

})
</script>