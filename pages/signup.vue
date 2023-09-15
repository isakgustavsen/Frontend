<!-- nuxt scaffolding -->
<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="submit">
      <base-input v-model="username" placeholder="Username" />
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
</script>