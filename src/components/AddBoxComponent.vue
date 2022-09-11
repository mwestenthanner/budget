<template>
  <div id="modal-overlay">
    <div id="modal">
      <h3>Add box or goal</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  type: {
    type: Object,
  },
});
</script>

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
  z-index: 1;
}

#modal {
  background-color: white;
  width: 40vw;
  padding: 3rem;
  border-radius: 1rem;
}
</style>
