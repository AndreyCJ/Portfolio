<script lang="ts">
  import { useDesignTokens } from '@/composables/useDesignTokens';
  import { defineComponent } from 'vue';

  // TODO: delete the whole logic (this is for tests only)
  export default defineComponent({
    name: 'MBlackhole',
    setup() {
      const { setCssVariable } = useDesignTokens();

      function updateBlackholeColor(e: Event): void {
        const input = e.target as HTMLInputElement;
        setCssVariable('--color-light-yellow', input.value);
      }

      return {
        updateBlackholeColor,
      };
    },
  });
</script>

<template>
  <div class="blackhole" />
  <!-- <input type="color" @input="updateBlackholeColor" /> -->
</template>

<style scoped>
  .blackhole {
    position: absolute;
    top: 25vh;
    left: 25vh;

    /* left: 51vw; */
    width: 25vw;
    height: 25vw;
    box-shadow: 2vh 0 4vh 4vh #f50, inset 4vh 4vh 0 6vh #f80,
      -3vh -3vh 5vh 0 #f60;
    z-index: -1;
    background: #000;
    opacity: 0.4;
    overflow: hidden;
  }

  .blackhole,
  .blackhole::before {
    filter: blur(4em);
    z-index: 0;
    display: flex;
    border-radius: 60%;
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  .blackhole::before,
  .blackhole::after {
    content: '';
    background: #fff;
    position: relative;
    top: 6vh;
  }

  .blackhole::before {
    width: 2vmin;
    height: 3vmin;
    left: 20vmin;
    box-shadow: var(--color-light-yellow) 0 0 2vh 2vh,
      var(--color-light-yellow) 2vh 4vh 2vh 0.3vh;
  }
</style>
