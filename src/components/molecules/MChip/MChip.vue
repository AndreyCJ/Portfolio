<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import AParagraph from '@/components/atoms/AParagraph/AParagraph.vue';

  export default defineComponent({
    name: 'MChip',
    components: { AParagraph },
    props: {
      text: {
        required: true,
        type: String as PropType<string>,
      },
    },
    computed: {
      hasPrefix(): boolean {
        return !!this.$slots.prefix;
      },
    },
  });
</script>

<template>
  <div class="m-chip">
    <div v-if="hasPrefix" class="m-chip__prefix">
      <slot name="prefix" />
    </div>
    <a-paragraph :text="text" class="m-chip__text" />
  </div>
</template>

<style lang="postcss" scoped>
  .m-chip {
    @apply flex items-center justify-center h-full bg-white dark:bg-dark-500 shadow drop-shadow-lg px-3 py-2.2 m-1 rounded-lg w-min;
  }

  .m-chip__prefix {
    @apply flex items-center self-center justify-center mr-2 w-full h-full text-sm;
  }

  .m-chip__text {
    @apply flex items-center justify-center;
  }
</style>
