<template>
  <router-view class="main-view" />
  <NavComponent></NavComponent>
</template>

<script lang="ts" setup>
import NavComponent from "@/components/NavComponent.vue";
import { useStore } from "vuex";

const store = useStore();

store.commit("setBaseIncome");
store.commit("setUnboxedIncome");
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-view {
  padding: 2rem;
  z-index: 2;
}
</style>
