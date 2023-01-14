<template>
  <div class="box-component" :class="{ saving: props.box.saving }">
    <h3>
      <span class="emoji">{{ props.box.emoji }}</span
      ><span class="title">{{ props.box.boxName }}</span>
    </h3>
    <p>
      {{ getDescription() }}{{ fractionAmount }} / {{ totalAmount }}
      {{ currency }}
    </p>
    <div :class="'progress-bar progress-bar-' + props.box.id">
      <span :class="'progress progress-' + props.box.id"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  box: {
    type: Object,
    required: true,
  },
});

const fractionAmount = ref(props.box.fractionAmount);
const totalAmount = ref(props.box.totalAmount);
const currency = "€";

onMounted(() => {
  calculateProgressPercentage();
});

function calculateProgressPercentage() {
  const progressBar = document.querySelector(
    ".progress-bar-" + props.box.id
  ) as HTMLElement;
  const progressFraction = document.querySelector(
    ".progress-" + props.box.id
  ) as HTMLElement;
  const width = progressBar?.offsetWidth;
  const height = progressBar?.offsetHeight;
  const decimal = fractionAmount.value / totalAmount.value;

  // Case for very high percentages
  if ((1 - decimal) * width < height && 1 - decimal > 0) {
    progressFraction.style.width = "1rem";
  } 
  // Case for very low percentages
  else if (decimal * width < (0.5 * height) && decimal > 0) {
    progressFraction.style.width = "calc(100% - 0.5rem)";
  } 
  else {
    const widthString = (100 - decimal * 100) + "%";
    progressFraction.style.width = widthString;
  }
}

function getDescription() {
  if (props.box.saving == true) {
    return "Saved: ";
  } else return "Spent: ";
}
</script>

<style lang="scss" scoped>
.box-component {
  border-bottom: 1px solid gray;
  padding: 1rem 0 0 0;
}

h3 {
  margin-bottom: 1.5rem;
  .title {
    padding-left: 0.5rem;
  }
}

.progress-bar {
  height: 1rem;
  position: relative;
  background: rgb(229, 229, 229);
  border-radius: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: row-reverse;

  .progress {
    display: block;
    height: 100%;
    border-radius: 1rem;
    background-color: rgb(140, 208, 174); // rgb(239, 115, 115);
    position: absolute;
    overflow: hidden;
  }
}

.saving {
  .progress {
    background-color: rgb(140, 208, 174);
  }
}
</style>
