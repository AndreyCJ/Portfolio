<script lang="ts">
  import { computed, defineComponent, PropType, ref } from 'vue';
  import MCarouselItem from '@/components/molecules/MCarouselItem/MCarouselItem.vue';
  import AButton from '@/components/atoms/AButton/AButton.vue';

  import { CarouselItem } from '@/types';
  import { useLazyImg } from '@/composables/useLazyImg';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'OCarousel',
    components: {
      MCarouselItem,
      AButton,
    },
    props: {
      items: {
        type: Array as PropType<Array<CarouselItem>>,
        required: true,
      },
    },
    setup(props) {
      const currSlideIndex = ref(0);
      const { observeLazyImg } = useLazyImg();
      const { t } = useI18n();

      const isCurrSlideFirst = computed(() => currSlideIndex.value === 0);
      const isCurrSlideLast = computed(
        () => currSlideIndex.value === props.items.length - 1
      );
      const slideStyle = computed(() => {
        return { marginLeft: '-' + String(100 * currSlideIndex.value) + '%' };
      });

      function showNextSlide() {
        if (currSlideIndex.value < props.items.length - 1) {
          currSlideIndex.value += 1;
        } else {
          currSlideIndex.value = 0;
        }
      }
      function showPrevSlide() {
        if (currSlideIndex.value > 0) {
          currSlideIndex.value -= 1;
        } else {
          currSlideIndex.value = props.items.length - 1;
        }
      }

      return {
        slideStyle,
        isCurrSlideFirst,
        isCurrSlideLast,
        showPrevSlide,
        showNextSlide,
        observeLazyImg,
        t,
      };
    },
  });
</script>
<template>
  <section class="o-carousel">
    <div class="o-carousel__wrapper" :style="slideStyle">
      <MCarouselItem
        v-for="item in items"
        :key="item.id"
        :carousel-item="item"
        class="o-carousel__item"
        @on-img-el-mounted="observeLazyImg"
      />
    </div>
    <div class="o-carousel__buttons">
      <a-button
        v-show="!isCurrSlideFirst"
        class="o-carousel__button o-carousel__button--left"
        @click="showPrevSlide"
      >
        {{ t('button.back') }}
      </a-button>
      <a-button
        v-show="!isCurrSlideLast"
        class="o-carousel__button o-carousel__button--right"
        @click="showNextSlide"
      >
        {{ t('button.next') }}
      </a-button>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
  .o-carousel {
    @apply mx-auto max-w-[850px] overflow-hidden h-full relative;

    &:hover {
      .o-carousel__buttons {
        display: flex !important;
      }

      &::before {
        content: '';
        width: 100%;
        display: block;
        height: 80px;
        bottom: 0;
        position: absolute;

        @apply bg-gradient-to-t to-transparent from-true-gray-500 dark:from-dark-50 rounded;
      }
    }

    &__wrapper {
      @apply flex transition-all h-full;
    }

    &__buttons {
      @apply absolute z-10 bottom-0 hidden justify-center !w-full;
    }

    &__button {
      @apply py-2 px-5 mb-2 mx-2 !shadow-none !bg-transparent font-extrabold hover:(!bg[var(--color-blue)]);
    }
  }
</style>
