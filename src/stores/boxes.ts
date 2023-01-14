import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBoxStore = defineStore('boxes', () => {
    const spendBoxes = ref([
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
          fractionAmount: 99,
          saving: false,
        },
        {
          id: 3,
          boxName: "Netflix",
          emoji: "📺",
          totalAmount: 10,
          fractionAmount: 10,
          saving: false,
        },
        {
          id: 4,
          boxName: "Dates",
          emoji: "💖",
          totalAmount: 100,
          fractionAmount: 1,
          saving: false,
        },
    ]);
      
    const goalBoxes = ref([
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
    ]);

    const savingsBox = ref({
        amount: 0
    })

    function getEmptySpendBoxes() {
      return spendBoxes.value.filter((box) => {
        return box.totalAmount == box.fractionAmount;
      })
    }

    function getNonEmptySpendBoxes() {
      return spendBoxes.value.filter((box) => {
        return box.totalAmount != box.fractionAmount;
      })
    }

    return {
        spendBoxes,
        goalBoxes,
        savingsBox,
        getEmptySpendBoxes,
        getNonEmptySpendBoxes
    }
})