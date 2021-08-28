<script lang="ts">
  import { computed, defineComponent } from 'vue';

  import TProjects from '@/components/templates/TProjects.vue';

  import { IProject } from '@/types';
  import { useI18n } from 'vue-i18n';
  import useAssets from '@/composables/useAssets';

  export default defineComponent({
    name: 'PProjects',
    components: {
      TProjects,
    },
    setup() {
      const { t } = useI18n();
      const { depools, depoolsStakes } = useAssets();

      const projects: IProject[] = [
        {
          images: [
            {
              id: 1,
              imgSrc: depools.light.png,
            },
            {
              id: 2,
              imgSrc: depools.dark.png,
            },
          ],
          name: 'DePools Staking',
          description: computed(() => t('projects.timetable.description')),
          demo: 'https://depools.koshelek.ru/',
          techStack: [
            { name: 'JavaScript' },
            { name: 'Vue' },
            { name: 'NodeJS' },
            { name: 'Redis' },
            { name: 'CSS' },
          ],
        },
        {
          images: [
            {
              id: 1,
              imgSrc: depoolsStakes?.light.png,
            },
            {
              id: 2,
              imgSrc: depoolsStakes?.dark.png,
            },
          ],
          name: 'NotesApp',
          description: computed(() => t('projects.timetable.description')),
          demo: 'https://example.com',
          techStack: [
            {
              name: 'JavaScript',
            },
            {
              name: 'CSS',
            },
          ],
        },
      ];

      return {
        projects,
      };
    },
  });
</script>

<template>
  <TProjects :projects="projects" />
</template>
