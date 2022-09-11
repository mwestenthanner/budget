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
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const transactions = computed(() => store.state.transactions);
</script>
