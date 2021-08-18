<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import AParagraph from '@/components/atoms/AParagraph/AParagraph.vue';
  import { useDesignTokens } from '@/composables/useDesignTokens';

  export default defineComponent({
    name: 'PTest',
    components: { AParagraph },
    setup() {
      const { setCssVariable } = useDesignTokens();
      const dummyText = ref(
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit magnam dolore ut hic consequatur eligendi sapiente nobis odio quaerat laudantium, qui veritatis quasi. Excepturi consequatur asperiores, consectetur nobis officia velit?'
      );

      function updateBgColor(e: Event): void {
        const input = e.target as HTMLInputElement;
        setCssVariable('--color-white-warm', input.value);
      }

      return {
        dummyText,
        updateBgColor,
      };
    },
  });
</script>

<template>
  <section class="test">
    <div class="container">
      <a-paragraph :text="dummyText" />
      <input type="color" @input="updateBgColor" />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
  .test {
    padding-top: 5em;
  }
</style>
