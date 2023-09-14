<script lang="ts" setup>

const { data } = await useFetch('/api/getUsers')

// fetch ('https://dummyjson.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))

</script>

<template>
  <div class="p-16">

    <!-- table to display users fetched in api request-->

    <table class="table-auto text-white">
      <thead>
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user.id">
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2">{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    
    </div>
</template>

<style scoped></style>
