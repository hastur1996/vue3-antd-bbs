<template>
  <div v-if="isLoading" class="home-box-loading">
    <img src="../../assets/logo.png" alt="猫猫丢了"/>
  </div>
  <div v-else>

  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, reactive } from "vue";
let isLoading = ref(true);
setTimeout(()=>{ isLoading.value = false}, 5000);
</script>
<style lang="scss" scoped>
.home-box-loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #abc88b;
  animation: loading 3s ease-in-out 0s infinite alternate forwards;
}
@keyframes loading {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>