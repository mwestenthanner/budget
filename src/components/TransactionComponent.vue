<template>
  <div class="transaction">
    <h3>
      <span class="title">{{ props.transaction.name }}</span>
    </h3>
    <p :class="['amount', isNegative() ? 'negative' : 'positive']">
      {{ props.transaction.amount.toFixed(2) }}
    </p>
    <p>{{ props.transaction.date }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  transaction: {
    type: Object,
    required: true,
  },
});

const currency = "€";

function isNegative() {
  if (props.transaction.amount < 0) {
    return true;
  } else return false;
}
</script>

<style lang="scss" scoped>
.transaction {
  border-bottom: 1px solid gray;
  padding: 1rem 0;
  display: grid;
  grid-template-areas:
    "heading price"
    "date price";
  justify-content: space-between;
  grid-gap: 1rem;
}

.amount {
  font-weight: 600;
  &.negative {
    color: red;
  }

  &.positive {
    color: green;
  }
}

.saving {
  .progress {
    background-color: rgb(140, 208, 174);
  }
}
</style>
