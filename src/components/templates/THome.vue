<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import { TechSkill } from '@/types/index';

  import OTechStack from '@/components/organisms/OTechStack/OTechStack.vue';

  export default defineComponent({
    name: 'THome',
    components: { OTechStack },
    props: {
      techStack: {
        required: true,
        type: Array as PropType<TechSkill[]>,
      },
    },
  });
</script>

<template>
  <o-tech-stack :tech-stack="techStack" />
</template>
