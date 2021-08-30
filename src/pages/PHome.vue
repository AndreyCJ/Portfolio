<script lang="ts">
  import {
    computed,
    defineComponent,
    reactive,
    WritableComputedRef,
  } from 'vue';
  import { useI18n } from 'vue-i18n';

  import THome from '@/components/templates/THome.vue';

  export default defineComponent({
    name: 'PHome',
    components: { THome },
    setup() {
      const { t } = useI18n();
      const myName: WritableComputedRef<string> = computed({
        get() {
          return t('my-full-name');
        },
        set(n) {
          text.myName = n;
        },
      });
      const myPosition: WritableComputedRef<string> = computed({
        get() {
          return t('my-position');
        },
        set(n) {
          text.myPosition = n;
        },
      });

      const text = reactive({
        myName: myName,
        myPosition: myPosition,
      });

      return {
        text,
      };
    },
  });
</script>

<template>
  <t-home :text="text" />
</template>
