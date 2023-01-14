import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useTransactionStore = defineStore('transactions', () => {
    const transactions = ref([
        {
          id: 1,
          name: "Starbucks",
          amount: -13.33,
          date: "2022-09-02",
          recurring: false,
        },
        {
          id: 2,
          name: "Monthly income",
          amount: 2124,
          date: "2022-09-01",
          recurring: true,
          recurringInterval: "monthly",
        },
        {
          id: 3,
          name: "Other income",
          amount: 90,
          date: "2022-09-02",
          recurring: true,
          recurringInterval: "monthly",
        },
    ]);

    return {
        transactions
    }
})