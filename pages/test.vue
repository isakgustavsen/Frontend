<script lang="ts" setup>

const supabase = useSupabaseClient();


let { data: faculty, error } = await supabase
  .from('faculty')
  .select('id')

  console.log('Fakultet: ' + faculty.value);
  if (error) {
    console.log('Faculty error: ' + error);
  }

</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
