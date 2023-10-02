<template>

  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>POKEDEX</h1>
      </div>
    </div>

    <div class="row">
     <ul>
      <li v-for="poke in pokemon" :key="pokemon.name">
        {{ poke.name }}
      </li>
     </ul>

    </div>
  </div>


  
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';


let pokemon = ref()

onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(res => res.json()).then(res => {pokemon = res.results; console.log(pokemon)})
})


</script>
