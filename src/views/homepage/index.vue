<template>
  <div>
    {{message}}
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive } from "vue";
const message = ref("vue3.2新特性")
const color = ref('red')

</script>
<style lang="scss" scoped>
div {
  color: v-bind(color);
}
</style>