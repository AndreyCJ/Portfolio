<script lang="ts">
  import THome from '@/components/templates/THome.vue';
  import { TechSkill } from '@/types';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PHome',
    components: { THome },
    data() {
      return {
        techStack: [
          {
            name: 'JavaScript',
          },
          {
            name: 'TypeScript',
          },
          {
            name: 'Vue',
          },
          {
            name: 'HTML',
          },
          {
            name: 'CSS',
          },
        ] as TechSkill[],
        aboutMeText: `Основной стек технологий, который я использую: JavaScript (Typescript), Vue.js, Vuex. \n Уверенное знание JavaScript, Vue.js, компонентной архитектуры, атомарного дизайна, методологии БЭМ, HTML/CSS адаптивной верстки. \n Умение работать с системой контроля версий Git (conventional commits). Есть опыт разработки бекенда и REST API для web-приложений (NodeJS, Express, NestJS, MongoDB, MySQL, Redis).`,
      };
    },
  });
</script>

<template>
  <t-home :tech-stack="techStack" :about-me-text="aboutMeText" />
</template>
