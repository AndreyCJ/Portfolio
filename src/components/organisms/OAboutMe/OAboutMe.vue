<script lang="ts">
  import AHeading from '@/components/atoms/AHeading/AHeading.vue';
  import AParagraph from '@/components/atoms/AParagraph/AParagraph.vue';
  import { defineComponent, PropType } from 'vue';

  import OTechStack from '@/components/organisms/OTechStack/OTechStack.vue';
  import { TechSkill } from '@/types';

  // TODO!: deconstruct into organisms/molecules

  export default defineComponent({
    name: 'OAboutMe',
    components: {
      AHeading,
      AParagraph,
      OTechStack,
    },
    props: {
      aboutMeText: {
        type: String as PropType<string>,
        required: true,
      },
      techStack: {
        type: Array as PropType<TechSkill[]>,
        required: true,
      },
    },
  });
</script>

<template>
  <section class="o-aboutMe">
    <div class="o-aboutMe__row">
      <div class="o-aboutMe__col">
        <a-heading tag="h2" :text="'Андрей Чеботарь'" class="p-0 m-0" />
        <a-heading
          tag="h4"
          :text="'Frontend разработчик'"
          class="p-0 m-0 !font-thin"
        />
      </div>
      <div class="o-aboutMe__col"></div>
    </div>

    <div class="o-aboutMe__col mt-4">
      <a-paragraph :text="aboutMeText" />
      <o-tech-stack :tech-stack="techStack" class="mt-4 justify-center" />
    </div>
  </section>
</template>
