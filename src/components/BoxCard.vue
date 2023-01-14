<template>
  <div class="box">
    <p>{{ box.boxName }}</p>
    <div class="box-amount">
      <h3>{{ box.fractionAmount }}</h3>
      <p>/ {{ box.totalAmount }} €</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  box: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.box {
  background-color: bisque;
  padding: 1.5rem;
  aspect-ratio: 5/6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;

  .box-amount {
    text-align: right;
    margin-left: 1rem;
  }

  h3 {
    margin-bottom: 0.2rem;
    font-size: 220%;
  }

  p {
    font-size: 90%;
  }
}
</style>
