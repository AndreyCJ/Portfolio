<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import OAboutMe from '../organisms/OAboutMe/OAboutMe.vue';
  import MBlackhole from '../molecules/MBlackhole/MBlackhole.vue';
  import MSpaceStar from '../molecules/MSpaceStar/MSpaceStar.vue';

  export default defineComponent({
    name: 'THome',
    components: { OAboutMe, MBlackhole, MSpaceStar },
    props: {
      aboutMeText: {
        required: true,
        type: String as PropType<string>,
      },
    },
  });
</script>

<template>
  <div class="mask">
    <div class="container">
      <section class="t-home">
        <o-about-me class="z-1" :about-me-text="aboutMeText" />
        <m-blackhole />
        <!-- TODO: add :amount to props -->
        <m-space-star :amount="5" />
      </section>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    overflow: hidden;
  }

  .t-home {
    @apply flex h-screen justify-center items-center;
  }
</style>
