<template>
  <div class="boxes">
    <h1>Boxes</h1>
    <main>
      <BoxComponent
        v-for="box in boxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
      <h2>Full boxes</h2>
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

const boxes = [
  {
    id: 1,
    boxName: "Groceries",
    emoji: "🥕",
    totalAmount: 250,
    fractionAmount: 50,
    saving: false,
  },
  {
    id: 2,
    boxName: "Fun Money",
    emoji: "🎉",
    totalAmount: 100,
    fractionAmount: 1,
    saving: false,
  },
];

const fullBoxes = [
  {
    id: 3,
    boxName: "Netflix",
    emoji: "🥕",
    totalAmount: 10,
    fractionAmount: 10,
    saving: false,
  },
  {
    id: 4,
    boxName: "Rent",
    emoji: "🎉",
    totalAmount: 800,
    fractionAmount: 800,
    saving: false,
  },
];
</script>

<style lang="scss" scoped>
h2 {
  margin: 2rem 0;
}
</style>
