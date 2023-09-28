<template>
  <div v-for="post in data" :key="post._id">
      <div class="grid grid-cols-5 mx-auto mt-16 justify-items-fill">
          <div v-if="post.mainImage" class="w-full overflow-hidden rounded-lg col-span-full">
              <NuxtImg
                  :src="$urlFor(post.mainImage).size(1000,512).url()"
                  :alt="post.title"
                  class="object-cover object-center w-full h-full rounded-t-xl" />
          </div>
      </div>
      <div
      class="grid w-9/12 grid-cols-6 mx-auto mb-16 text-gray-900 -translate-y-16 rounded-lg shadow-2xl dark:divide-slate-900 justify-items-stretch bg-slate-100 dark:bg-slate-800 dark:text-white">
          <div class="col-span-4 col-start-2 p-8 overflow-auto ">
              <h1 class="mb-8 text-5xl">{{ post.title }}</h1>
              <BlockContent :blocks="post.body"/>
          </div>
      </div>
  </div>
</template>


<script setup lang="ts">
import { CalendarDaysIcon, ClockIcon, MapIcon, TicketIcon } from '@heroicons/vue/24/outline';



const route = useRoute();

const query = groq`*[   
  _type == "post" && 
  slug.current == '${route.params.slug}'
  ]
  {
    title,
  slug,
  datetime,
  category->{title},
  mainImage,
  publishedAt,
  body,}`;
const { data } = useSanityQuery(query);

</script>
