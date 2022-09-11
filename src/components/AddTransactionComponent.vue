<template>
  <div id="modal-overlay" @click="$emit('close-modal')">
    <div id="modal" @click.stop>
      <h2>{{ getType() }}</h2>
      <label for="desc">Description</label>
      <input type="text" name="desc" id="desc" />
      <label for="amount">Amount</label>
      <input type="number" name="amount" id="amount" />
      <label for="box-select">Choose box</label>
      <Multiselect id="box-select" v-model="value" :options="options" />
      <button type="submit">Submit</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed } from "vue";
import Multiselect from "@vueform/multiselect";
import { useStore } from "vuex";

const store = useStore();

const options = computed(() => store.getters.getBoxNames);
const value = ref(null);

const props = defineProps({
  isExpense: {
    type: Boolean,
  },
});

function getType() {
  if (props.isExpense == true) {
    return "Add expense";
  } else return "Add income";
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
#modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000b0;
  align-items: center;
  z-index: 11;
}

#modal {
  background-color: white;
  width: 70vw;
  padding: 2rem;
  border-radius: 1rem;
}

h2 {
  margin-bottom: 1.5rem;
}

#box-select {
  margin: 0.5rem 0;
}
</style>
