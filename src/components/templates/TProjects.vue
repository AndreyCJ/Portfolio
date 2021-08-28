<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  import AHeading from '@/components/atoms/AHeading/AHeading.vue';
  import AExternalLink from '@/components/atoms/AExternalLink/AExternalLink.vue';
  import AParagraph from '@/components/atoms/AParagraph/AParagraph.vue';
  import OTechStack from '@/components/organisms/OTechStack/OTechStack.vue';
  import OCarousel from '@/components/organisms/OCarousel/OCarousel.vue';

  import useAssets from '@/composables/useAssets';
  import { CarouselItem, TechSkill } from '@/types';

  export default defineComponent({
    name: 'TProjects',
    components: {
      AHeading,
      AParagraph,
      AExternalLink,
      OTechStack,
      OCarousel,
    },
    setup() {
      const { t } = useI18n();
      const { depools, depoolsStakes } = useAssets();
      const projects = [
        {
          imgSrc: depools?.light?.png,
          images: [
            {
              id: 1,
              imgSrc: depools?.light?.png,
            },
            {
              id: 2,
              imgSrc: depools?.dark?.png,
            },
          ] as CarouselItem[],
          name: 'DePools Staking',
          description: computed(() => t('projects.timetable.description')),
          demo: 'https://depools.koshelek.ru/',
          teckStack: [
            { name: 'JavaScript' },
            { name: 'Vue' },
            { name: 'NodeJS' },
            { name: 'Redis' },
            { name: 'CSS' },
          ] as TechSkill[],
        },
        {
          imgSrc: depools?.light?.png,
          images: [
            {
              id: 1,
              imgSrc: depoolsStakes?.light?.png,
            },
            {
              id: 2,
              imgSrc: depoolsStakes?.dark?.png,
            },
          ] as CarouselItem[],
          name: 'NotesApp',
          description: computed(() => t('projects.timetable.description')),
          demo: 'https://example.com',
          teckStack: [
            {
              name: 'JavaScript',
            },
            {
              name: 'CSS',
            },
          ] as TechSkill[],
        },
      ];

      return { t, projects };
    },
  });
</script>

<template>
  <section class="projects">
    <div class="container">
      <AHeading :text="t('button.projects')" tag="h2" />
    </div>
    <div v-for="project in projects" :key="project.name" class="project">
      <OCarousel :items="project.images" />
      <!-- <div class="project__img">
        <img :src="project.imgSrc" :alt="project.name" />
      </div> -->
      <div class="container">
        <div class="project__specs">
          <div class="project__heading">
            <AHeading :text="project.name" tag="h4" class="!p-0 m-0 mr-2" />
            <AExternalLink
              text="Try Live"
              :href="project.demo"
              class="text-sm"
            />
          </div>
          <OTechStack
            :tech-stack="project.teckStack"
            class="project__techstack"
          />
        </div>
      </div>
      <div class="project__description">
        <div class="container">
          <AParagraph :text="project.description.value" class="mt-2" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
  .project {
    @apply mb-4em;

    &__img {
      @apply px-6 mx-auto max-w-[850px];

      img {
        @apply rounded-lg shadow-md shadow-black h-auto w-full;
      }
    }

    &__specs {
      @apply mt-3 px-6 py-2;
      @apply flex justify-between items-center <md:(flex-wrap  px-3);
      @apply bg-white dark:(bg-dark-800 border-dark-400) border-solid border-width-1px border-light-600 rounded-lg;
    }

    &__heading {
      @apply flex flex-wrap  items-center <md:(justify-between w-full );
    }
  }
</style>
