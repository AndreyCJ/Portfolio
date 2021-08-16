<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AButton',
    emits: {
      click: null,
    },
    setup(props, { emit }) {
      const onClick = () => {
        emit('click');
      };

      return {
        onClick,
      };
    },
  });
</script>

<template>
  <button class="a-button a-button--base" @click="onClick">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
  .a-button {
    @apply flex items-center font-semibold rounded-lg shadow-md outline-transparent dark:outline-transparent transition duration-200 ease-in-out;
  }

  .a-button--base {
    @apply text-white  bg-indigo-500 hover:bg-indigo-700 dark:bg-gray-700 dark:text-warm-gray-50 dark:hover:bg-gray-800;
  }
</style>
