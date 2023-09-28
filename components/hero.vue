<template>
  <div v-for="hero in data" :key="hero._id" class="relative bg-gray-800">
    <div class="mx-auto max-w-7xl md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
      <div class="px-6 pt-10 pb-24 sm:pb-32 md:col-span-7 md:px-0 md:pb-56 md:pt-48 xl:col-span-6">
        <div class="max-w-2xl mx-auto lg:mx-0">
          <h1 class="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">{{ hero.heroTitle }}</h1>
          <p class="mt-6 text-lg leading-8 text-gray-200">{{ hero.heroText }}</p>
          <div class="flex items-center mt-10 gap-x-6">
            <NuxtLink :to="'/' + hero.heroButtonLink" class="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ hero.heroButtonText }}</NuxtLink>
          </div>
        </div>
      </div>
      <div class="relative hidden md:col-span-5 md:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 md:flex">
        <NuxtImg class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" :src="hero.heroImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>

const query = groq`*[_type == 'frontPage']{
    _id,
    'heroImage': heroImage.asset-> url,
    heroButtonText,
    heroButtonLink,
    heroTitle,
    heroText,
}`;

const { data } = useSanityQuery(query);
  
</script>
