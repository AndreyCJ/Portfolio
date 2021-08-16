<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import { TechSkill } from '@/types/index';

  import OAboutMe from '../organisms/OAboutMe/OAboutMe.vue';

  export default defineComponent({
    name: 'THome',
    components: { OAboutMe },
    props: {
      techStack: {
        required: true,
        type: Array as PropType<TechSkill[]>,
      },
      aboutMeText: {
        required: true,
        type: String as PropType<string>,
      },
    },
  });
</script>

<template>
  <section class="t-home">
    <o-about-me :tech-stack="techStack" :about-me-text="aboutMeText" />
  </section>
</template>

<style lang="postcss" scoped>
  .t-home {
    @apply flex h-screen justify-center items-center;
  }
</style>
