<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AParagraph',
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  });
</script>

<template>
  <p class="a-paragraph">
    {{ text }}
  </p>
</template>

<style scoped lang="postcss">
  .a-paragraph {
    @apply text-dark-700 dark:text-warm-gray-200;

    line-height: 1.8;
    max-width: 44em;
  }
</style>
