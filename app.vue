<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div>
    <Account v-if="user" />
    <Auth v-else />
    <!-- <NuxtLayout>
    </NuxtLayout> -->
  </div>
</template>
