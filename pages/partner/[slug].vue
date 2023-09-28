<template>
  <div v-for="partner in data" :key="partner._id">
      <div class="grid grid-cols-5 mx-auto justify-items-fill">
          <div class="w-full overflow-hidden rounded-lg col-span-full">
              <NuxtImg
                  :src="$urlFor(partner.header).size(1000,512).url()"
                  :alt="partner.title"
                  class="object-cover object-center w-full h-full rounded-t-xl" />
          </div>
      </div>
      <div
      class="grid w-9/12 grid-cols-6 mx-auto mb-16 text-gray-900 -translate-y-16 rounded-lg shadow-2xl dark:divide-slate-900 justify-items-stretch bg-slate-100 dark:bg-slate-800 dark:text-white">
          <div class="p-8 overflow-auto col-span-full md:col-span-4 md:col-start-2">
              <h1 class="mb-8 text-2xl md:text-5xl">{{ partner.title }}</h1>
              <!-- <SanityContent :blocks="partner.body"/> -->
              <!-- <PortableText 
                :value="partner.body" 
                :components="TextBlock" 
                /> -->
                <BlockContent :blocks="partner.body" class="prose" />
                <!-- <div class="prose prose-slate dark:prose-invert">
                <h1>title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div> -->
          </div>
          
      </div>
  </div>
</template>


<script setup lang="ts">


const route = useRoute();

const query = groq`*[_type == "partners" && slug.current == '${route.params.slug}']
  {
  title,
  slug,
  body,
  header,
  logo,}`;
const { data } = useSanityQuery(query);

import TextBlock from '~/components/sanity/textBlock.vue';


// const customComponents = {
//   block: {
//     // Ex. 1: customizing common block types
//     h1: (_, { slots }) => h('h1', { class: 'text-2xl font-semibold text-red-900' }, slots.default?.()),
//   },
//   list: {
//     // Ex. 1: customizing common list types
//     bullet: (_, { slots }) => h('ul', { class: 'mt-xl list-disc list-outside' }, slots.default?.()),
//     number: (_, { slots }) => h('ol', { class: 'mt-lg list-decimal list-outside' }, slots.default?.()),
//   },
// };

</script>