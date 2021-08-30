<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ASpinner',
  });
</script>

<template>
  <div class="flex justify-center items-center">
    <div
      class="
        loader
        ease-linear
        rounded-full
        border-8 border-t-8 border-gray-200
      "
    ></div>
  </div>
</template>

<style>
  .loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 0.5s linear infinite;
    animation: spinner 0.5s linear infinite;
    width: 30px;
    height: 30px;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
