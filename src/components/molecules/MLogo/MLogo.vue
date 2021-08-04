<script lang="ts">
  import AHeading from '@/components/atoms/AHeading/AHeading.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MLogo',
    components: { AHeading },
  });
</script>

<template>
  <a-heading tag="h3" text="A.ch" class="m-logo" />
</template>

<style scoped lang="postcss">
  .m-logo {
    @apply m-0 p-0;
  }
</style>
