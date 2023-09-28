<template>
    <div class="bg-gray-900">
      <div class="px-6 mx-auto max-w-7xl lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Kommende arrangementer</h2>
          <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
        </div>
        <div class="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="event in events" :key="event._id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
              <NuxtImg class="object-cover w-full rounded-lg"
                :src="$urlFor(event.mainImage).size(512,512).url()"
                :alt="event.title"
                />
                <img :src="src" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="flex items-center mt-8 text-xs text-gray-200 gap-x-4">
                <time :datetime="event.date" class="">{{ event.datetime ? useDate(event.datetime) : '' }}</time>
                <span class="text-slate-400">|</span>
                <p>Organisert av {{ event.organizer.title }}</p>
              </div>
              <div class="relative group">
                <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-200 group-hover:text-gray-300">
                  {{ event.title }}
                </h3>
                <div class="mt-5 text-sm leading-6 text-gray-200 line-clamp-4">
                  <SanityContent :blocks="event.body"/>
                </div>
              </div>
            </div>
            <NuxtLink :to="'/event/' + event.slug.current">
              <BaseButton>Les mer</BaseButton>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
</template>
  
<script setup>

const query = groq`*[_type == "event" && dateTime(datetime) > dateTime(now())]| order(datetime asc)[0..2]{
  title,
  slug,
  datetime,
  location->{title, location},
  mainImage,
  organizer->{title},
  body,}`;
const { data: events } = useSanityQuery(query);

</script>