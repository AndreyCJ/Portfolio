<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AIcon',
  });
</script>

<template>
  <div class="a-icon">
    <slot name="icon" class="a-icon__i" />
  </div>
</template>
