import { createStore } from "vuex";

const currency = "€";
const roundTo = 0;
const cycle = "month";
const baseIncome = 0;
const unboxedIncome = 0;

const transactions = [
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
];

const spendBoxes = [
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
];

const goalBoxes = [
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

export default createStore({
  state: {
    currency,
    roundTo,
    cycle,
    baseIncome,
    unboxedIncome,
    transactions,
    spendBoxes,
    goalBoxes,
  },
  getters: {
    getFullBoxes: (state) => {
      return state.spendBoxes.filter(
        (box) => box.fractionAmount == box.totalAmount
      );
    },
    getNonFullBoxes: (state) => {
      return state.spendBoxes.filter(
        (box) => box.fractionAmount != box.totalAmount
      );
    },
    getBoxNames: (state) => {
      return state.spendBoxes.map((box) => box.boxName);
    },
  },
  mutations: {
    setBaseIncome(state) {
      state.transactions.forEach((transaction) => {
        if (transaction.amount > 0) {
          state.baseIncome = state.baseIncome + transaction.amount;
        }
      });
    },
    setUnboxedIncome(state) {
      let boxedAmount = 0;
      state.spendBoxes.forEach((box) => {
        boxedAmount = boxedAmount + box.totalAmount;
      });

      state.unboxedIncome = state.baseIncome - boxedAmount;
    },
  },
  actions: {},
  modules: {},
});
