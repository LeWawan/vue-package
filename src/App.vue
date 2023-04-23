<script setup lang="ts">
import { HelloWorld } from '@/components'
</script>

<template>
  <div class="container">
    <HelloWorld />
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
}

.button-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}

.icon {
  border: 1px solid #ccc;
  border-radius: 10%;
  width: 2rem;
  height: 2rem;
  padding: .7rem;
  will-change: filter;
  transition: filter 300ms;
  outline: none;
}

.icon:hover {
  filter: brightness(1.2);
}
</style>
