<template>
  <router-link :to="'/show/'+show.id">
    <img :src='show.image?.medium' />
    <p>{{ show.name }}</p>
  </router-link>
</template>
<script setup>
defineProps({ show: Object });
</script>