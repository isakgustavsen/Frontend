<script lang="ts" setup>

const queryPartners = groq`*[_type == 'partners']{
  _id,
  title,
  slug,
  logo,
}`;

const { data: partners } = useSanityQuery(queryPartners);

</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
