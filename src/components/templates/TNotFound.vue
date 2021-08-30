<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import AHeading from '@/components/atoms/AHeading/AHeading.vue';

  export default defineComponent({
    name: 'TNotFound',
    components: {
      AHeading,
    },
    props: {
      notFoundText: {
        required: true,
        type: String as PropType<string>,
      },
      searchParamText: {
        required: true,
        type: String as PropType<string>,
      },
    },
  });
</script>
<template>
  <div class="container flex flex-col justify-center h-screen text-center">
    <a-heading :text="notFoundText" tag="h2" class="mb-4 !font-extralight" />
    <code>
      <a-heading
        :text="searchParamText"
        tag="h1"
        class="m-0 !normal-case break-words"
      />
    </code>
  </div>
</template>
