<script setup>
import { onMounted, ref } from 'vue';
import { fetchShow } from '../api/tvmaze';
import { useRoute } from 'vue-router';
const route=useRoute(), show=ref(null);
onMounted(async()=> show.value=(await fetchShow(route.params.id)).data);
</script>
<template>
  <div v-if='show'>
    <h1>{{ show.name }}</h1>
    <img :src='show.image?.original' />
    <div v-html='show.summary'></div>
  </div>
</template>