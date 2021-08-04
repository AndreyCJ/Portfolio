<script lang="ts">
  import THome from '@/components/templates/THome.vue';
  import { TechSkill } from '@/types';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PHome',
    components: { THome },
    data() {
      return {
        techStack: [
          {
            name: 'JavaScript',
          },
          {
            name: 'TypeScript',
          },
          {
            name: 'Vue',
          },
        ] as TechSkill[],
      };
    },
  });
</script>

<template>
  <t-home :tech-stack="techStack" />
</template>
