<script lang="ts" setup>
  import { defineProps, HTMLAttributes } from 'vue';
  import { getRandomBetween } from '@/utils/getRandomBetween';

  const props = defineProps({
    amount: {
      type: Number,
      required: true,
    },
  });

  function getStarStyles(): HTMLAttributes['style'] {
    return {
      top: getRandomBetween(10, 99) + '%',
      animationDuration: getRandomBetween(2, 20) + 's',
      filter: `blur(${getRandomBetween(2, 5)}px)`,
    };
  }
</script>

<template>
  <div
    v-for="i in props.amount"
    :key="i"
    :style="getStarStyles()"
    class="star"
  />
</template>

<style lang="postcss" scoped>
  .star {
    width: 1px;
    height: 1px;
    filter: blur(3px);
    position: fixed;
    animation-name: particleAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &::before {
      position: absolute;
      display: block;
      content: '';
      width: 100px;
      right: 1px;
      top: 0;
      height: 1px;
    }

    &:nth-of-type(1n) {
      top: 25%;
      animation-duration: 10s;

      &::before {
        background: linear-gradient(
          to right,
          transparent 40%,
          var(--color-dark) 100%
        );
      }

      .dark &::before {
        background: linear-gradient(
          to right,
          transparent 40%,
          var(--color-white-warm) 100%
        );
      }
    }

    &:nth-of-type(2) {
      top: 50%;
      animation-duration: 5s;

      &::before {
        background: linear-gradient(
          to right,
          transparent 10%,
          var(--color-dark) 100%
        );
      }

      .dark &::before {
        background: linear-gradient(
          to right,
          transparent 10%,
          var(--color-white-warm) 100%
        );
      }
    }

    &:nth-of-type(3) {
      top: 75%;
      animation-duration: 20s;

      &::before {
        background: linear-gradient(
          to right,
          transparent 70%,
          var(--color-dark) 100%
        );
      }

      .dark &::before {
        background: linear-gradient(
          to right,
          transparent 70%,
          var(--color-white-warm) 100%
        );
      }
    }
  }

  @keyframes particleAnimation {
    from {
      left: -100px;
    }

    to {
      left: calc(100% + 100px);
    }
  }
</style>
