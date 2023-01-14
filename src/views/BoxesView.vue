<template>
  <div class="boxes">
    <h1>Boxes</h1>
    <main>
      <BoxComponent
        v-for="box in boxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
      <h2 v-if="hasEmptyBoxes != 0">Empty boxes</h2>
      <BoxComponent
        v-for="box in emptyBoxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BoxComponent from "@/components/BoxComponent.vue";
import { useBoxStore } from "@/stores/boxes";
import { computed, ref } from "vue";

const store = useBoxStore();

const boxes = computed(() => store.getNonEmptySpendBoxes());
const emptyBoxes = computed(() => store.getEmptySpendBoxes());
const hasEmptyBoxes = ref(emptyBoxes.value.length);
</script>

<style lang="scss" scoped>
h2 {
  margin: 2rem 0;
}
</style>
