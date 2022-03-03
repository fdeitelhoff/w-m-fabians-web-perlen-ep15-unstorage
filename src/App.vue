<script setup lang="ts">
import StorageTests from './components/StorageTests.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Suspense>
    <template #default>
      <StorageTests />
    </template>
    <template #fallback>
      <div>Lade...</div>
    </template>
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
