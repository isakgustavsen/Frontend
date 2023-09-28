
<script setup>

//recive props from parent
const props = defineProps({
  blocks: {
    type: Array,
    required: true,
  },
});

import { PortableText } from '@portabletext/vue';

</script>

<template>
    <div class="prose-sm md:prose-base prose-slate prose-ol:list-decimal prose-ul:list-disc dark:prose-invert">
    <PortableText
        :value="blocks" 
        />
    </div>
</template>