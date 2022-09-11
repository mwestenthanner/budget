<template>
  <div class="goals">
    <h1>Goals</h1>
    <main>
      <BoxComponent
        v-for="box in boxes"
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
    boxName: "New car",
    emoji: "🚗",
    totalAmount: 25000,
    fractionAmount: 120,
    saving: true,
  },
  {
    id: 2,
    boxName: "Winter wardrobe",
    emoji: "👕",
    totalAmount: 200,
    fractionAmount: 170,
    saving: true,
  },
];
</script>
