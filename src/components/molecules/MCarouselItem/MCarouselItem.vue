<script lang="ts">
  import { CarouselItem } from '@/types';
  import { defineComponent, onMounted, PropType, ref } from 'vue';

  export default defineComponent({
    name: 'MCarouselItem',
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

      onMounted(() => {
        if (imageRef.value) {
          emit('onImgElMounted', imageRef.value);
        }
      });

      return { imageRef };
    },
  });
</script>
<template>
  <div class="m-carousel-item">
    <img ref="imageRef" :data-src="carouselItem.imgSrc" />
  </div>
</template>

<style lang="postcss" scoped>
  .m-carousel-item {
    img {
      @apply shadow-md shadow-black object-cover rounded;

      max-width: 850px;
      min-height: 540px;
    }
  }
</style>
