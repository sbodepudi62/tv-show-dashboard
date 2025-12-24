<script setup>
import { onMounted } from 'vue';
import { useShowsStore } from '../store/shows';
import GenreRow from '../components/GenreRow.vue';
import SearchBar from '../components/SearchBar.vue';
const store = useShowsStore();
onMounted(()=>store.loadShows());
</script>
<template>
  <SearchBar />
  <div v-if='store.loading'>Loading...</div>
  <GenreRow v-for='(shows,genre) in store.genres' :key='genre' :genre='genre' :shows='shows' />
</template>