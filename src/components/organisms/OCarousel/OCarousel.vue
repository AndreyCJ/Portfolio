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
      const currSlideIndex = ref(1);
      const { observeLazyImg } = useLazyImg();
      const { t } = useI18n();

      const isCurrSlideFirst = computed(() => currSlideIndex.value === 1);
      const isCurrSlideLast = computed(
        () => currSlideIndex.value === props.items.length
      );

      function showNextSlide() {
        if (!isCurrSlideLast.value) {
          currSlideIndex.value += 1;
        }
      }
      function showPrevSlide() {
        if (!isCurrSlideFirst.value) {
          currSlideIndex.value -= 1;
        }
      }
      function isSlideActive(id: number): boolean {
        return id === currSlideIndex.value;
      }

      return {
        isCurrSlideFirst,
        isCurrSlideLast,
        isSlideActive,
        showPrevSlide,
        showNextSlide,
        observeLazyImg,
        t,
      };
    },
  });
</script>
<template>
  <section
    class="o-carousel"
    :class="{ 'o-carousel--multi': items.length > 1 }"
  >
    <div class="o-carousel__wrapper">
      <MCarouselItem
        v-for="item in items"
        :key="item.id"
        :carousel-item="item"
        class="o-carousel__item"
        :class="{ 'o-carousel__item--active': isSlideActive(item.id) }"
        @on-img-el-mounted="observeLazyImg"
      />
    </div>
    <div v-if="items.length > 1" class="o-carousel__buttons">
      <a-button
        :disabled="isCurrSlideFirst"
        class="o-carousel__button o-carousel__button--left"
        @click="showPrevSlide"
      >
        {{ t('button.back') }}
      </a-button>
      <a-button
        :disabled="isCurrSlideLast"
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
    @apply mx-auto overflow-hidden h-full relative max-w-[850px];

    &--multi {
      &:hover {
        .o-carousel__buttons {
          display: flex !important;
        }
      }
    }

    &__item {
      @apply transition-all ease-in-out;

      display: none;

      &--active {
        display: block;
        margin: 0 auto;
      }
    }

    &__wrapper {
      @apply flex transition-all h-full;
    }

    &__buttons {
      @apply absolute z-10 bottom-0 hidden justify-center !w-full transition-all ease-in-out;
    }

    &__button {
      @apply py-2 px-5 mb-2 mx-2  font-extrabold hover:(!bg[var(--color-blue)]) transition-all ease-in-out;
    }
  }
</style>
