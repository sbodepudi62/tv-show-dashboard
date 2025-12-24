<template>
  <input v-model='q' @input='search' placeholder='Search shows...' />
  <ul>
    <li v-for='s in results' @click='go(s.id)'>{{ s.name }}</li>
  </ul>
</template>
<script setup>
import { ref } from 'vue';
import { searchShows } from '../api/tvmaze';
import { useRouter } from 'vue-router';
const q=ref(''), results=ref([]), router=useRouter();
const search=async()=>{
  if(!q.value) return results.value=[];
  results.value=(await searchShows(q.value)).data.map(r=>r.show);
};
const go=id=>router.push('/show/'+id);
</script>