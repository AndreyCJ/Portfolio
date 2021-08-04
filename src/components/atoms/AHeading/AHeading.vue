<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  export default defineComponent({
    name: 'AHeading',
    props: {
      tag: {
        type: String as PropType<HeadingTag>,
        required: true,
      },
      text: {
        type: String as PropType<string>,
        required: true,
      },
    },
  });
</script>

<template>
  <component :is="tag" class="a-heading">
    {{ text }}
  </component>
</template>

<style scoped lang="postcss">
  .a-heading {
    @apply font-bold text-gray-900 dark:text-light-900 pb-4;
  }

  h1.a-heading {
    @apply text-5xl md:text-7xl capitalize;
  }

  h2.a-heading {
    @apply text-3xl md:text-5xl capitalize;
  }

  h3.a-heading {
    @apply text-xl md:text-3xl capitalize;
  }

  h4.a-heading {
    @apply text-lg md:text-xl capitalize;
  }

  h5.a-heading {
    @apply text-base md:text-lg;
  }

  h6.a-heading {
    @apply text-sm md:text-base;
  }
</style>
