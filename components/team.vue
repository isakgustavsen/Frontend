<template>
    <div class="bg-gray-700 py-16 sm:py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Styret</h2>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          <li v-for="person in people" :key="person.name">
            <img class="aspect-[14/13] w-full rounded-2xl object-cover" :src="person.imageUrl" alt="" />
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{{ person.name }}</h3>
            <p class="text-base leading-7 text-gray-300">{{ person.role }}</p>
            <p class="text-sm leading-6 text-gray-500">{{ person.location }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      location: 'Toronto, Canada',
    },
    // More people...
  ]
  </script>