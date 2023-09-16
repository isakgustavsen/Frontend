

<template>
    <div v-for="event in data" :key="event._id">
    <div class="mt-16 mx-auto w-10/12 grid grid-cols-5 justify-items-fill">
        <div class="w-full col-span-full">
            <NuxtImg :src="event.imageUrl" :alt="event.imageAlt" class="rounded-lg" />
        </div>
    </div>
    <div
        class="mx-auto mb-16 w-10/12 -translate-y-16 -translate-x-8 grid grid-cols-5 divide-dashed divide-x-2 divide-gray-300 dark:divide-slate-900 justify-items-stretch rounded-lg shadow-2xl bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white">
        <div class="col-span-3 col-start-1 p-8 overflow-auto ">
            <p class="text-6xl mb-8">{{ event.title }}</p>
            <p class="">
                <SanityContent :blocks="event.body" />
            </p>
        </div>
        <div class="col-span-2 px-8 pt-8">
            <p class=" text-2xl mb-4">Event Info</p>
            <div class="space-y-3">
                <p class="">
                    <CalendarDaysIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event.datetime ? useDate(event.datetime) : ''}}
                </p>
                <p class="">
                    <ClockIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event.datetime ? useTime(event.datetime) : '' }}
                </p>
                <p class="">
                    <MapIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event.location.title }}
                </p>
            </div>
            <!-- <div class="space-y-3 mt-10">
                <p class="">
                    <TicketIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event.ticketprice.type }}: {{ event.ticketprice.price }}
                </p>
                <p class="">
                    <TicketIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event.ticketprice.type }}: {{ event.ticketprice.price }}
                </p>
                <p class="">
                    <TicketIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event.ticketprice.type }}: {{ event.ticketprice.price }}
                </p>
            </div> -->
            <button
                class="rounded-md  my-4 px-3.5 py-2.5 font-bold 
                text-white shadow-sm bg-indigo-600 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-indigo-500">
                Kjøp Billett</button>

        </div>
    </div>
</div>
</template>


<script setup lang="ts">
import { CalendarDaysIcon, ClockIcon, MapIcon, TicketIcon } from '@heroicons/vue/24/outline';
import moment from 'moment';

const route = useRoute();

const query = groq`*[   
    _type == "event" && 
    slug.current == '${route.params.slug}' 
    ]
    {
  title,
  tags,
  datetime,
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
