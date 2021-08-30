<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import AParagraph from '@/components/atoms/AParagraph/AParagraph.vue';
  import AHeading from '@/components/atoms/AHeading/AHeading.vue';

  export default defineComponent({
    name: 'TAboutMe',
    components: {
      AParagraph,
      AHeading,
    },
    props: {
      aboutMeText: {
        required: true,
        type: String as PropType<string>,
      },
      pageHeading: {
        required: true,
        type: String as PropType<string>,
      },
    },
  });
</script>

<template>
  <section class="t-about-me">
    <div class="container">
      <AHeading :text="pageHeading" tag="h2" />
      <AParagraph :text="aboutMeText" />
    </div>
  </section>
</template>
