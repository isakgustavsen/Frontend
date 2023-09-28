<template>
  <div class="bg-gray-900">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nyheter</h2>
      </div>
      <div class="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in news" :key="post._id" class="flex flex-col items-start justify-between">
          <div v-if="post.mainImage" class="relative w-full">
            <NuxtImg class="object-cover w-full rounded-lg"
              :src="$urlFor(post.mainImage).size(512,300).url()"
              :alt="post.title"
              />
              <img :src="src" />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="flex items-center mt-8 text-xs text-gray-200 gap-x-4">
              <time :datetime="post.publishedAt" class=""> Publisert: {{ post.publishedAt ? useDate(post.publishedAt) : '' }}</time>
            </div>
            <div class="relative group">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-200 group-hover:text-gray-300">
                {{ post.title }}
              </h3>
              <div class="mt-5 text-sm leading-6 text-gray-200 line-clamp-4">
                <SanityContent :blocks="post.body"/>
              </div>
            </div>
          </div>
          <NuxtLink :to="'/news/' + post.slug.current">
            <BaseButton>Les mer</BaseButton>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>

const query = groq`*[_type == "post"]| order(datetime asc)[0..2]{
  title,
  slug,
  datetime,
  category->{title},
  mainImage,
  publishedAt,
  body,}`;
const { data: news } = useSanityQuery(query);
console.log(news);
</script>