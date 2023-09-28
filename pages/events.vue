<template>
    <div v-if="data" class="">
        <div class="px-4 py-16 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-24 lg:px-8">
            <div v-if="data" class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
                <div v-for="event in data" :key="event._id"
                    class="shadow-lg group bg-slate-100 dark:bg-slate-800 rounded-xl">
                    <NuxtLink :to="'/event/' + event.slug.current">
                        <div class="overflow-hidden aspect-h-1 aspect-w-1 hover:opacity-95">
                            <NuxtImg
                                :src="$urlFor(event.mainImage).size(512,512).url()"
                                :alt="event.title"
                                class="object-cover object-center w-full h-full rounded-t-xl" 
                                />
                        </div>
                    </NuxtLink>
                    <div class="m-4 text-gray-900 dark:text-gray-300">
                        <h3 class="mb-4 text-4xl font-bold text-center">{{ event.title }}</h3>
                        <p class="italic text-center ">{{ event.datetime ? useDate(event.datetime) : '' }}</p>
                        <p class="mt-1 mb-4 italic text-center ">Arrangert av {{ event.organizer.title}}</p>
                        <div class="text-center line-clamp-3">
                            <SanityContent :blocks="event.body" />
                        </div>
                        <div class="grid grid-flow-col gap-8 mx-4 mt-4 justify-items-center">
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

const query = groq`*[_type == "event" && dateTime(datetime) > dateTime(now())]| order(datetime asc){
  title,
  slug,
  datetime,
  mainImage,
  organizer->{title},
  body,
  ticketlink,
  }`;
const { data } = useSanityQuery(query);


</script>
