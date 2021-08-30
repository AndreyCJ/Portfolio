<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'ONavDrawer',
    emits: {
      closeMenu: () => Boolean,
    },
    setup(props, { emit }) {
      function closeMenu() {
        emit('closeMenu');
      }

      function closeWithDelay() {
        setTimeout(closeMenu, 0);
      }

      return {
        closeMenu,
        closeWithDelay,
      };
    },
  });
</script>

<template>
  <section class="nav-drawer">
    <div class="nav-drawer__header">
      <a-button class="!bg-red-600 !py-2" @click="closeMenu">
        <i-eva-close-circle-outline />
      </a-button>
    </div>
    <div class="nav-drawer__items" @click="closeWithDelay">
      <slot name="nav-items" />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
  .nav-drawer {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--color-white-warm);
    z-index: 999;
    padding: var(--container-padding);

    &__header {
      display: flex;
      justify-content: flex-end;
      margin: 1rem 0;
    }

    &__items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
  }

  .dark .nav-drawer {
    background-color: var(--color-dark);
  }
</style>
