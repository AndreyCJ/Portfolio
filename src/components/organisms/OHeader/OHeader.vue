<script lang="ts">
  import { defineComponent } from 'vue';
  import MLogo from '@/components/molecules/MLogo/MLogo.vue';

  export default defineComponent({
    name: 'OHeader',
    components: { MLogo },
    emits: {
      switchTheme: null,
    },
  });
</script>

<template>
  <header class="flex items-center justify-between px-8 py-6 mb-4">
    <m-logo />
    <a-button class="h-min m-0 text-sm" @click="$emit('switchTheme')">
      SWITCH THEME
    </a-button>
  </header>
</template>
