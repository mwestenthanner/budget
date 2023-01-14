<template>
  <div class="goals">
    <h1>Goals</h1>
    <main>
      <BoxComponent
        v-for="box in goalBoxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BoxComponent from "@/components/BoxComponent.vue";
import { useBoxStore } from "@/stores/boxes";
import { storeToRefs } from "pinia";

const { goalBoxes } = storeToRefs(useBoxStore())
</script>
