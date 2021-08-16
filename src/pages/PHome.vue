<script lang="ts">
  import THome from '@/components/templates/THome.vue';
  import { useDesignTokens } from '@/composables/useDesignTokens';
  import { defineComponent, onMounted } from 'vue';

  export default defineComponent({
    name: 'PHome',
    components: { THome },
    setup() {
      const { cssVars } = useDesignTokens();
      const aboutMeText = `Основной стек технологий, который я использую: JavaScript (Typescript), Vue.js, Vuex. \n Уверенное знание JavaScript, Vue.js, компонентной архитектуры, атомарного дизайна, методологии БЭМ, HTML/CSS адаптивной верстки. \n Умение работать с системой контроля версий Git (conventional commits). Есть опыт разработки бекенда и REST API для web-приложений (NodeJS, Express, NestJS, MongoDB, MySQL, Redis).`;

      onMounted(() => {
        console.log('home css vars', cssVars);
      });

      return {
        aboutMeText,
      };
    },
  });
</script>

<template>
  <t-home :about-me-text="aboutMeText" />
</template>
