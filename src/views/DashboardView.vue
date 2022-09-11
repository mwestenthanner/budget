<template>
  <div class="home">
    <h1>Dashboard</h1>
    <main>
      <div class="overview">
        <p class="label">Left to spend:</p>
        <p class="lg-amount">240 €</p>
        <p class="sm-amount">/ 2000 €</p>
      </div>
      <h2>Track spending</h2>
      <ActionComponent></ActionComponent>
      <h2>Boxes</h2>
      <div class="boxes">
        <div class="box">
          <p>Groceries</p>
          <div class="box-amount">
            <h3>215</h3>
            <p>/ 300 €</p>
          </div>
        </div>
        <div class="box">
          <p>Transport</p>
          <div class="box-amount">
            <h3>20</h3>
            <p>/ 120 €</p>
          </div>
        </div>
      </div>
      <h2>Goals</h2>
      <div class="boxes">
        <div class="box">
          <p>Groceries</p>
          <div class="box-amount">
            <h3>215</h3>
            <p>/ 300 €</p>
          </div>
        </div>
        <div class="box">
          <p>Transport</p>
          <div class="box-amount">
            <h3>20</h3>
            <p>/ 120 €</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import ActionComponent from "@/components/ActionComponent.vue";
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
}
</style>
