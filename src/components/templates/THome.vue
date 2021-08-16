<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import OAboutMe from '../organisms/OAboutMe/OAboutMe.vue';

  export default defineComponent({
    name: 'THome',
    components: { OAboutMe },
    props: {
      aboutMeText: {
        required: true,
        type: String as PropType<string>,
      },
    },
  });
</script>

<template>
  <section class="t-home">
    <o-about-me :about-me-text="aboutMeText" />
  </section>
</template>

<style lang="postcss" scoped>
  .t-home {
    @apply flex h-screen justify-center items-center;
  }
</style>
