<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { RouteLocation } from 'vue-router';

  export default defineComponent({
    name: 'ALink',
    props: {
      to: {
        type: Object as PropType<RouteLocation>,
        required: true,
      },
      text: {
        type: String as PropType<string>,
        required: true,
      },
      alt: {
        type: String as PropType<string>,
        required: true,
      },
    },
    mounted() {
      console.log(this.$router.currentRoute);
    },
  });
</script>

<template>
  <router-link class="a-link a-link--router" :to="to" :alt="alt">
    {{ text }}
  </router-link>
</template>
