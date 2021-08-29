<script lang="ts">
  import { CarouselItem } from '@/types';
  import { defineComponent, onMounted, PropType, ref } from 'vue';
  import ASpinner from '@/components/atoms/ASpinner/ASpinner.vue';

  export default defineComponent({
    name: 'MCarouselItem',
    components: {
      ASpinner,
    },
    props: {
      carouselItem: {
        type: Object as PropType<CarouselItem>,
        required: true,
      },
    },
    emits: {
      onImgElMounted: (el: HTMLImageElement) => el,
    },
    setup(props, { emit }) {
      const imageRef = ref<HTMLImageElement>();
      let isImgLoaded = ref(false);

      onMounted(() => {
        if (imageRef.value) {
          emit('onImgElMounted', imageRef.value);
        }
      });

      return { imageRef, isImgLoaded };
    },
  });
</script>
<template>
  <div
    class="m-carousel-item"
    :class="{ 'm-carousel-item--loading': !isImgLoaded }"
  >
    <ASpinner v-if="!isImgLoaded" class="m-carousel-item__spinner" />
    <img
      ref="imageRef"
      class="m-carousel-item__img"
      :data-src="carouselItem.imgSrc"
      @load="isImgLoaded = true"
    />
  </div>
</template>

<style lang="postcss" scoped>
  .m-carousel-item {
    @apply w-full h-0 relative pt-[53%] overflow-hidden <md:!mx-2;

    border-radius: 8px;

    &__spinner {
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      z-index: 1;
    }

    &__img {
      @apply absolute top-0 left-0 w-full shadow-md shadow-black object-cover transition-all ease-in-out;

      max-width: 100%;
    }
  }
</style>
