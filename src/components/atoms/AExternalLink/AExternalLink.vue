<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  export default defineComponent({
    name: 'AExternalLink',
    props: {
      href: {
        type: String as PropType<string>,
        required: true,
      },
      text: {
        type: String as PropType<string>,
        required: true,
      },
      alt: {
        type: String as PropType<string>,
        required: false,
        default: () => '',
      },
    },
  });
</script>

<template>
  <a
    class="a-external-link"
    target="_blank"
    rel="noopener noreferrer"
    :href="href"
    :alt="alt"
  >
    {{ text }} ->
  </a>
</template>

<style lang="postcss" scoped>
  .a-external-link {
    @apply text-[var(--color-blue)] hover:opacity-50;
  }
</style>
