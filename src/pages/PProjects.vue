<script lang="ts">
  import { defineComponent } from 'vue';

  import TProjects from '@/components/templates/TProjects.vue';

  export default defineComponent({
    name: 'PProjects',
    components: {
      TProjects,
    },
  });
</script>

<template>
  <TProjects />
</template>
