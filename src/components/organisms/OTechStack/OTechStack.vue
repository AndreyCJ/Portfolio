<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import MChip from '@/components/molecules/MChip/MChip.vue';

  import { TechSkill } from '@/types/index';

  // Iconify icons
  import IconTypeScript from 'virtual:vite-icons/logos/typescript-icon';
  import IconJavaScript from 'virtual:vite-icons/logos/javascript';
  import IconNodeJS from 'virtual:vite-icons/logos/nodejs';
  import IconRedis from 'virtual:vite-icons/logos/redis';
  import IconVue from 'virtual:vite-icons/logos/vue';
  import IconHTML from 'virtual:vite-icons/logos/html-5';
  import IconCSS from 'virtual:vite-icons/logos/css-3';

  export default defineComponent({
    name: 'OTechStack',
    components: {
      MChip,
      IconTypeScript,
      IconJavaScript,
      IconNodeJS,
      IconRedis,
      IconVue,
      IconHTML,
      IconCSS,
    },
    props: {
      techStack: {
        type: Array as PropType<TechSkill[]>,
        required: true,
      },
    },
    methods: {
      getIconName(name: string): string {
        return 'Icon' + name;
      },
    },
  });
</script>

<template>
  <section class="o-techStack">
    <m-chip v-for="(skill, i) in techStack" :key="i" :text="skill.name">
      <template #prefix>
        <component :is="getIconName(skill.name)" />
      </template>
    </m-chip>
  </section>
</template>

<style lang="postcss" scoped>
  .o-techStack {
    @apply flex flex-wrap w-full justify-end items-center <md:(justify-center border-t-light-900 border-t-2px pt-2 mt-2);

    & > div {
      @apply mr-3 last:mr-0;
    }
  }
</style>
