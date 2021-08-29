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
      const {
        depools,
        depoolsStakes,
        notesApp,
        schoolApp,
        timetableCalls,
        timetableMain,
      } = useAssets();

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
            {
              id: 3,
              imgSrc: depoolsStakes.light.png,
            },
            {
              id: 4,
              imgSrc: depoolsStakes.dark.png,
            },
          ],
          name: 'DePools Staking',
          description: computed(() => t('projects.depools.description')),
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
              imgSrc: timetableMain.universal,
            },
            {
              id: 2,
              imgSrc: timetableCalls.universal,
            },
          ],
          name: 'TimetableApp',
          description: computed(() => t('projects.timetable.description')),
          demo: 'https://example.com',
          techStack: [
            {
              name: 'JavaScript',
            },
            {
              name: 'React',
            },
            {
              name: 'Express',
            },
            {
              name: 'CSS',
            },
          ],
        },
        {
          images: [
            {
              id: 1,
              imgSrc: notesApp.universal,
            },
          ],
          name: 'NotesApp',
          description: computed(() => t('projects.notesApp.description')),
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
        {
          images: [
            {
              id: 1,
              imgSrc: schoolApp.universal,
            },
          ],
          name: '1SchoolApp',
          description: computed(() => t('projects.1school.description')),
          demo: 'https://1school-wptheme.000webhostapp.com/',
          github: 'https://github.com/AndreyCJ/1school_WpTheme',
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
