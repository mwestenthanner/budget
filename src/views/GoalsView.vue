<template>
  <div class="goals">
    <h1>Goals</h1>
    <main>
      <BoxComponent
        v-for="box in boxes"
        :key="box.id"
        :box="box"
      ></BoxComponent>
    </main>
  </div>
</template>

<script lang="ts" setup>
import BoxComponent from "@/components/BoxComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const boxes = computed(() => store.state.goalBoxes);
</script>
