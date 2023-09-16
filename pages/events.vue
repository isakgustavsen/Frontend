<template>
    <div v-if="data" class="">
        <div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div v-if="data" class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
                <div v-for="event in data" :key="event._id" class="group bg-slate-100 dark:bg-slate-800 shadow-lg">
                    <NuxtLink :to="'/event/' + event.slug.current">
                        <div class=" aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 hover:opacity-95">
                            <NuxtImg :src="event.imageUrl" :alt="event.imageAlt"
                                class="h-full w-full object-cover object-center" />
                        </div>
                    </NuxtLink>
                    <div class="m-4 text-gray-900 dark:text-gray-300">
                        <h3 class="text-4xl text-center font-bold mb-4">{{ event.title }}</h3>
                        <p class=" italic text-center  mb-4">{{ event.datetime ? useDate(event.datetime) : ''}}</p>
                        <!-- <SanityContent :class="body" class="  text-center line-clamp-3"/> -->
                        <div class="text-center">
                        <SanityContent :blocks="event.body" />
                        </div>
                        <div class="grid grid-flow-col justify-items-center gap-8 mx-4 mt-4">
                            <NuxtLink :to="'/event/' + event.slug.current">
                                <BaseButton>Les Mer</BaseButton>
                            </NuxtLink>
                            <NuxtLink v-if="event.ticketlink" :to="event.ticketlink">
                                <BaseButton>Kjøp Billett</BaseButton>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const query = groq`*[_type == "event"]{
  title,
  slug,
  datetime,
    
  "imageUrl": mainImage.asset->url,
  organizer->{
    title
  },
  body,}`;
  const { data } = useLazySanityQuery(query);

</script>
