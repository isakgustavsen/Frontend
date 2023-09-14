<!-- 
    toDo:
    Make event image dynamic
 -->

<template>
    <div class="mt-16 mx-auto w-10/12 grid grid-cols-3 justify-items-fill">
        <div class="w-full col-span-full">
            <NuxtImg src="/tix.svg" alt="Utsolgt" class="rounded-lg" />
        </div>
    </div>
    <div
        class="mx-auto mb-16 w-9/12 -translate-y-16 -translate-x-8 grid grid-cols-3 divide-dashed divide-x-2 divide-gray-300 dark:divide-slate-900 justify-items-stretch rounded-lg shadow-2xl bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white">
        <div class="col-span-2 col-start-1 p-8">
            <p class="text-6xl mb-8">{{ event[0].title }}</p>
            <p class=""> {{ event[0].description }} </p>
        </div>
        <div class="col-span-1 px-8 pt-8">
            <p class=" text-3xl mb-4">Event Info</p>
            <div class="space-y-3">
                <p class="">
                    <CalendarDaysIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event[0].date }}
                </p>
                <p class="">
                    <ClockIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event[0].time }}
                </p>
                <p class="">
                    <MapIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event[0].location }}
                </p>
            </div>
            <div class="space-y-3 mt-10">
                <p class="">
                    <TicketIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event[0].ticketprice[0].type }}: {{ event[0].ticketprice[0].price }}
                </p>
                <p class="">
                    <TicketIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event[0].ticketprice[1].type }}: {{ event[0].ticketprice[1].price }}
                </p>
                <p class="">
                    <TicketIcon class="w-6 h-6 inline-block mr-2" aria-hidden="true" />
                    {{ event[0].ticketprice[2].type }}: {{ event[0].ticketprice[2].price }}
                </p>
            </div>
            <button type="button"
                class="rounded-md  my-4 px-3.5 py-2.5 font-bold 
                text-white shadow-sm bg-indigo-600 hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-indigo-500">
                Kjøp Billett</button>

        </div>
    </div>
</template>


<script setup>
import { CalendarDaysIcon, ClockIcon, MapIcon, TicketIcon } from '@heroicons/vue/24/outline';

const event = [
    {
        title: 'Tix',
        description: 'Tix er en norsk rapper og låtskriver fra Bærum. Han er kjent for låter som «Shotgun», «Neste Sommer», «Jeg Vil Ikke Leve», «Kaller På Deg» og «Jeg Vil Ikke Danse».',
        imageUrl: '/tix.svg',
        location: 'Studentsamfunnet Driv',
        time: '20:00',
        date: '08/08/2024',
        ticketprice: [
            {
                id: 1,
                type: 'Ordinær',
                price: '1000,-'
            },
            {
                id: 2,
                type: 'Student',
                price: '800,-'
            },
            {
                id: 3,
                type: 'Fadder',
                price: '500,-'
            }
        ]
    },
]
</script>