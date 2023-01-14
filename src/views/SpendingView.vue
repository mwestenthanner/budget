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
import { useTransactionStore } from "@/stores/transactions";
import { storeToRefs } from "pinia";

const { transactions } = storeToRefs(useTransactionStore());
</script>
