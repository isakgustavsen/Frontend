<template>
    <div v-for="event in data" :key="event._id">
        <div class="grid grid-cols-5 mx-auto justify-items-fill">
            <div class="w-full overflow-hidden col-span-full">
                <NuxtImg
                    :src="$urlFor(event.mainImage).size(1000,512).url()"
                    :alt="event.title"
                    class="object-cover object-center w-full h-full" />
            </div>
        </div>
        <div
            class="grid w-9/12 grid-cols-5 mx-auto mb-16 text-gray-900 -translate-x-12 -translate-y-16 divide-x-2 divide-gray-300 rounded-lg shadow-2xl divide-dashed dark:divide-slate-900 justify-items-stretch bg-slate-100 dark:bg-slate-800 dark:text-white">
            <div class="col-span-3 col-start-1 p-8 overflow-auto ">
                <h1 class="mb-8 text-6xl font-bold">{{ event.title }}</h1>
                <BlockContent :blocks="event.body"/>
            </div>  
            <div class="col-span-2 px-8 pt-8">
                <p class="mb-4 text-2xl font-semibold ">Event Info</p>
                <div class="space-y-3">
                    <p class="align-text-bottom ">
                        <CalendarDaysIcon class="inline-block w-6 h-6 mr-2" aria-hidden="true" />
                        {{ event.datetime ? useDate(event.datetime) : '' }}
                    </p>
                    <p class="">
                        <ClockIcon class="inline-block w-6 h-6 mr-2" aria-hidden="true" />
                        {{ event.datetime ? useTime(event.datetime) : '' }}
                    </p>
                    <p class="">
                        <MapIcon class="inline-block w-6 h-6 mr-2" aria-hidden="true" />
                        {{ event.location.title }}
                    </p>
                </div>
                <div class="my-10 space-y-1">
                    <p  v-for="price in event.pricelist" class=" my-1.5 align-text-bottom">
                        <TicketIcon class="inline-block w-6 h-6 mr-2" aria-hidden="true" />
                        {{ price.name }} - {{ price.price }}kr
                    </p>
            </div>
            <!-- <gmap :center="event.location.location" :zoom="12" class="w-full mt-8 rounded-lg h-96"></gmap> -->
                <NuxtLink class="" v-if="event.ticketlink" :to="event.ticketlink">
                    <BaseButton>Kjøp Billett</BaseButton>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { CalendarDaysIcon, ClockIcon, MapIcon, TicketIcon } from '@heroicons/vue/24/outline';



const route = useRoute();

const date = Date.now();

const query = groq`*[   
    _type == "event" 
    && slug.current == '${route.params.slug}'
    ]
    {
  title,
  ticketlink,
  tags,
  datetime,
  location->{title, location},
  mainImage, 
  organizer->{title},
  body,
  pricelist
  }`;
const { data } = useSanityQuery(query);

</script>
