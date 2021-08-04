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
        required: true,
      },
    },
  });
</script>

<template>
  <a
    class="a-link a-link--external"
    target="_blank"
    rel="noopener noreferrer"
    :href="href"
    :alt="alt"
  >
    {{ text }}
  </a>
</template>
