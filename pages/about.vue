<template>
    <div class="text-white">
      <header>
        <h1 class=" text-white">Sanity + Nuxt</h1>
      </header>
      <main>
        <h2>Pets</h2>
        <ul v-if="data">
          <li v-for="pet in data" v-bind:key="pet._id">
            {{ pet.title }} playing at {{ pet.EventLocation }}
          </li>
        </ul>
        <p v-else>No pets to show</p>
        <h2>Data</h2>
        <div v-if="data">
          <pre v-if="data">{{ JSON.stringify(data, null, 2) }}</pre>
        </div>
        <div v-else>
          <div>¯\_(ツ)_/¯</div>
          <p>
            Your data will show up here when you've configured everything
            correctly
          </p>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  const query = groq`*[_type == "event"]`;
  const { data } = useSanityQuery(query);
  </script>