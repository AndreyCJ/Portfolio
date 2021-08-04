<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import MChip from '@/components/molecules/MChip/MChip.vue';

  import { TechSkill } from '@/types/index';

  export default defineComponent({
    name: 'OTechStack',
    components: { MChip },
    props: {
      techStack: {
        type: Array as PropType<TechSkill[]>,
        required: true,
      },
    },
  });
</script>

<template>
  <section class="o-techStack">
    <m-chip v-for="(skill, i) in techStack" :key="i" :text="skill.name">
      <template #prefix>
        <i-mdi-language-typescript class="text-lg text-blue-500" />
      </template>
    </m-chip>
  </section>
</template>

<style lang="postcss" scoped>
  .o-techStack {
    @apply flex;
  }
</style>
