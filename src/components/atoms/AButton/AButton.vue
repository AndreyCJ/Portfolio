<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  export default defineComponent({
    name: 'AButton',
    props: {
      disabled: {
        type: Boolean as PropType<boolean>,
        default: () => false,
      },
    },
    emits: {
      click: null,
    },
    setup(props, { emit }) {
      const onClick = () => {
        if (!props.disabled) {
          emit('click');
        }
      };

      return {
        onClick,
      };
    },
  });
</script>

<template>
  <button
    class="a-button a-button--base"
    :class="{ 'a-button--disabled': disabled }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
  .a-button {
    @apply px-3 py-1 text-sm flex items-center rounded-md shadow-md outline-transparent dark:outline-transparent transition duration-200 ease-in-out;

    &--base {
      @apply text-white  bg-indigo-500 hover:bg-indigo-700 dark:bg-gray-700 dark:text-warm-gray-50 dark:hover:bg-gray-800;
    }

    &--disabled {
      @apply opacity-60 cursor-default;
    }
  }
</style>
