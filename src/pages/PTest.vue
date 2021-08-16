<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import AParagraph from '@/components/atoms/AParagraph/AParagraph.vue';

  export default defineComponent({
    name: 'PTest',
    components: { AParagraph },
    setup() {
      const dummyText = ref(
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit magnam dolore ut hic consequatur eligendi sapiente nobis odio quaerat laudantium, qui veritatis quasi. Excepturi consequatur asperiores, consectetur nobis officia velit?'
      );

      return {
        dummyText,
      };
    },
  });
</script>

<template>
  <section class="test">
    <a-paragraph :text="dummyText" />
  </section>
</template>

<style lang="postcss" scoped>
  .test {
    padding-top: 5em;
  }
</style>
