<script lang="ts">
  import { defineComponent, InjectionKey, PropType } from 'vue';
  import { RouteLocation } from 'vue-router';

  type DesignTokens = Record<string, string>;

  const designTokens: InjectionKey<DesignTokens> = Symbol('designTokens');

  export default defineComponent({
    name: 'ALink',
    inject: ['designTokens'],
    props: {
      to: {
        type: Object as PropType<RouteLocation>,
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
    data() {
      return {
        styles: {
          '--primary': '#285577',
        },
      };
    },
    mounted() {
      console.log('design tokens', this.designTokens);
    },
  });
</script>

<template>
  <router-link
    class="a-link"
    :to="to"
    :alt="alt"
    active-class="a-link a-link--active"
    :style="styles"
  >
    {{ text }}
  </router-link>
</template>

<style lang="postcss" scoped>
  .a-link {
    font-weight: 600;
    padding-bottom: 2px;

    &:hover {
      opacity: 0.6;
      border-bottom: 3px dotted #c4c4c4;
    }

    &--active {
      border-bottom: 3px solid var(--primary);
    }
  }
</style>
