<script lang="ts">
  import { defineComponent } from 'vue';
  import TAboutMe from '@/components/templates/TAboutMe.vue';

  export default defineComponent({
    name: 'PAboutMe',
    components: {
      TAboutMe,
    },
  });
</script>

<template>
  <TAboutMe />
</template>
