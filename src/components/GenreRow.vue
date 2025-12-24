<template>
  <h2>{{ genre }}</h2>
  <div class='row'>
    <ShowCard v-for='s in shows' :key='s.id' :show='s' />
  </div>
</template>
<script setup>
import ShowCard from './ShowCard.vue';
defineProps({ genre: String, shows: Array });
</script>
<style>
.row{display:flex;overflow-x:auto;gap:12px;}
</style>