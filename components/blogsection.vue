<template>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl pb-8">Kommende arrangementer</h2>
          <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="event in data" :key="event._id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
              <NuxtImg :src="event.imageUrl" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="event.date" class="text-gray-200">{{ event.date }}</time>
                <div v-for="tag in tags" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> {{ tag }}</div>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-200 group-hover:text-gray-300">
                  
                    <span class="absolute inset-0" />
                    {{ event.title }}
                  
                </h3>
                <div class="mt-5 line-clamp-6 text-sm leading-6 text-gray-200">
                  <SanityContent :blocks="event.body"/>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const query = groq`*[_type == "event"]{
  title,
  date,
  tags->{
    title
  },
  location->{
    title,
    location
  },
    
  "imageUrl": mainImage.asset->url,
  organizer->{
    title
  },
  body,}`;
  const { data } = useSanityQuery(query);
  </script>