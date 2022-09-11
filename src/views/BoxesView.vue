<template>
  <div class="boxes">
    <h1>Boxes</h1>
    <main>
      <BoxComponent
        v-for="box in boxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
      <h2 v-if="hasFullBoxes != 0">Full boxes</h2>
      <BoxComponent
        v-for="box in fullBoxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BoxComponent from "@/components/BoxComponent.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const boxes = computed(() => store.getters.getNonFullBoxes);
const fullBoxes = computed(() => store.getters.getFullBoxes);
const hasFullBoxes = ref(fullBoxes.value.length);
</script>

<style lang="scss" scoped>
h2 {
  margin: 2rem 0;
}
</style>
