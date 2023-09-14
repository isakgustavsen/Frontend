<template>
    <div class="">
        <div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
                <div v-for="event in events" :key="event.id" class="group bg-slate-100 dark:bg-slate-800 shadow-lg">
                    <NuxtLink :to="event.href">
                        <div class=" aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 hover:opacity-95">
                            <NuxtImg :src="event.imageSrc" :alt="event.imageAlt"
                                class="h-full w-full object-cover object-center" />
                        </div>
                    </NuxtLink>
                    <div class="m-4 text-gray-900 dark:text-gray-300">
                        <h3 class="text-4xl text-center font-bold mb-4">{{ event.title }}</h3>
                        <p class=" italic text-center  mb-4">{{ event.date }}</p>
                        <p class="  text-center line-clamp-3">{{ event.description }}</p>
                        <div class="grid grid-flow-col justify-items-center gap-8 mx-4 mt-4">
                            <NuxtLink :to="event.href">
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


const events = [
    {
        id: 1,
        title: 'Tix',
        date: '20.10.2021',
        description: 'Tix er en norsk rapper fra Bærum. Han er kjent for låter som «Neste Sommer», «Sjeiken 2020» og «Kaller på deg».',
        ticketlink: 'https://www.ticketmaster.no/artist/tix-billetter/1008843',
        href: '/event/{{ event[0].title }}',
        imageSrc: '/tix.svg',
        imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
        id: 2,
        title: 'Gabrielle',
        date: '21.10.2021',
        description: 'Gabriellle er en popartist fra Bergen. Hun er kjent for låter som «5 fine frøkner», «Ring meg» og «Fem fine frøkner». Hun spilte også i filmen «Battle».',
        ticketlink: '/event/{{ event[0].title }}',
        href: '/event/{{ event[0].title }}',
        imageSrc: '/gabrielle.jpeg',
        imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
        id: 3,
        title: 'Broiler',
        date: '22.10.2021',
        description: 'Dj Broiler er en norsk DJ-duo fra Drammen. De er kjent for låter som «Afterski», «Vannski» og «En gang til».',
        // ticketlink: '/event/{{ event[0].title }}',
        href: '/event/{{ event[0].title }}',
        imageSrc: '/broiler.jpeg',
        imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
        id: 4,
        title: 'Kjartan Lauritzen',
        date: '23.10.2021',
        description: 'Kjartan Lauritzen er en norsk artist fra Bergen. Han er kjent for låter som «Fett», «Kjære deg» og «Hjerteslag».',
        ticketlink: '/event/{{ event[0].title }}',
        href: '/event/{{ event[0].title }}',
        imageSrc: '/kjartan.jpeg',
        imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
    {
        id: 5,
        title: 'Katastrofe',
        date: '24.10.2021',
        description: 'Katastrofe er en norsk artist fra Bergen. Han er kjent for låter som «Sangen du hater», «Nødlanding» og «Typisk norsk».',
        ticketlink: '/event/{{ event[0].title }}',
        href: '/event/{{ event[0].title }}',
        imageSrc: '/katastrofe.jpeg',
        imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    },
]
</script>
