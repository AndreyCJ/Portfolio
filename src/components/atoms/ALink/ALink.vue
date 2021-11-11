<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { RouteLocation } from 'vue-router';

  export default defineComponent({
    name: 'ALink',
    props: {
      to: {
        type: Object as PropType<Partial<RouteLocation>>,
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
    emits: {
      click: null,
    },
    setup(props, { emit }) {
      function handleClick() {
        emit('click');
      }

      return {
        handleClick,
      };
    },
  });
</script>

<template>
  <router-link
    class="a-link"
    :to="to"
    :alt="alt"
    active-class="a-link--active"
    @click="handleClick"
  >
    {{ text }}
  </router-link>
</template>

<style lang="postcss" scoped>
  .a-link {
    @apply pb-[3px] text[var(--color-blue-gray)] dark:text[var(--color-blue-gray-light)];

    &:not(.a-link--active) {
      @apply hover:(opacity-60 border-dotted border-b-gray-700 border-b-[2px]);
    }

    &--active {
      @apply border-solid border-b-[var(--color-primary)] border-b-[2px];
    }
  }
</style>
