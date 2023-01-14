import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useBaseStore = defineStore('base', () => {

    const currency = ref("€");
    const roundTo = ref(0);
    const cycle = ref("month");
    const baseIncome = ref(2500);
    const unboxedIncome = ref(100);

    function setCurrency(newCurrency: string) {
        currency.value = newCurrency;
    }

    function setRoundFactor(round: number) {
        roundTo.value = round;
    }

    function setCycle(newCycle: string) {
        cycle.value = newCycle;
    }
    
    function setBaseIncome(income: number) {
        baseIncome.value = income;
    }

    function setUnboxedIncome(income: number) {
        unboxedIncome.value = income;
    }

    return {
        currency,
        roundTo,
        cycle,
        baseIncome,
        unboxedIncome,
        setCurrency,
        setRoundFactor,
        setCycle,
        setBaseIncome,
        setUnboxedIncome
    }
    
})