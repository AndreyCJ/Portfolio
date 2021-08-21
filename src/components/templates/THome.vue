<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import MBlackhole from '../molecules/MBlackhole/MBlackhole.vue';
  import MSpaceStar from '../molecules/MSpaceStar/MSpaceStar.vue';

  export default defineComponent({
    name: 'THome',
    components: { MBlackhole, MSpaceStar },
    props: {
      text: {
        required: true,
        type: Object as PropType<{ myName: string; myPosition: string }>,
      },
    },
  });
</script>

<template>
  <div class="mask">
    <section class="t-home">
      <div class="my-info z-1">
        <a-heading tag="h2" :text="text.myName" class="p-0 m-0" />
        <a-heading
          tag="h4"
          :text="text.myPosition"
          class="p-0 m-0 !font-light"
        />
      </div>
      <m-blackhole />
      <m-space-star :amount="5" />
    </section>
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
