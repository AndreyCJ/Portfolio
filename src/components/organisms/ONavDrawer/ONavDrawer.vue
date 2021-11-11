<script lang="ts">
  import { defineComponent, watch } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'ONavDrawer',
    emits: {
      closeMenu: () => Boolean,
    },
    setup(props, { emit }) {
      const route = useRoute();

      watch(() => route.name, closeMenu);

      function closeMenu() {
        emit('closeMenu');
      }

      return {
        closeMenu,
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
    <div class="nav-drawer__items">
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
