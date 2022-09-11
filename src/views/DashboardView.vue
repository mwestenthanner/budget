<template>
  <div class="home">
    <h1>Dashboard</h1>
    <main>
      <div class="overview">
        <p class="label">Left to spend:</p>
        <p class="lg-amount">{{ unboxedIncome }} {{ currency }}</p>
        <p class="sm-amount">/ {{ baseIncome }} {{ currency }}</p>
      </div>
      <h2>Track spending</h2>
      <ActionComponent></ActionComponent>
      <h2>Boxes</h2>
      <div class="boxes">
        <BoxCard v-for="box in boxes" :key="box.id" :box="box"></BoxCard>
      </div>
      <h2>Goals</h2>
      <div class="boxes">
        <BoxCard v-for="box in goals" :key="box.id" :box="box"></BoxCard>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import ActionComponent from "@/components/ActionComponent.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import BoxCard from "../components/BoxCard.vue";

const store = useStore();
const currency = computed(() => store.state.currency);
const baseIncome = computed(() => store.state.baseIncome);
const unboxedIncome = computed(() => store.state.unboxedIncome);
const boxes = computed(() => store.getters.getNonFullBoxes);
const goals = computed(() => store.state.goalBoxes);
</script>

<style lang="scss" scoped>
main {
  margin-bottom: 5rem;
}

h2 {
  margin-top: 2rem;
}

.overview {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  text-align: right;
  gap: 0.5rem;
  flex-direction: column;
  .lg-amount {
    font-size: 280%;
    font-weight: 700;
  }
  .label {
    font-size: 70%;
  }
}

.boxes {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
</style>
