<script lang="ts" setup>

import { defineProps } from 'vue'

defineProps({
  modelValue: String,
  placeholder: String,
})


</script>

<template>
  <div>
    <!-- vue input component -->
    <input type="search" />
  </div>
</template>

<style scoped></style>
