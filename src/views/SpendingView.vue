<template>
  <div class="spending">
    <h1>Spending</h1>
    <TransactionComponent
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    ></TransactionComponent>
  </div>
</template>

<script lang="ts" setup>
import TransactionComponent from "@/components/TransactionComponent.vue";

const transactions = [
  {
    id: 1,
    name: "Starbucks",
    amount: -13.33,
    date: "2022-09-02",
  },
  {
    id: 2,
    name: "Monthly income",
    amount: 2124,
    date: "2022-09-01",
  },
];
</script>
