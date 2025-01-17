<template>
  <p>{{ count }}</p>
  <button v-on:click="count++">Incrémenter</button>
  <button v-on:click="count--">Décrémenter</button>
</template>
<script setup>
import { ref } from "vue";
const count = ref(5);
</script>
