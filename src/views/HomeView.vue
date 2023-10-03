<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 sidebar">
        <div class="link-box" style="margin-top: 15%; margin-left: 2%;">
          <p class="links">Adicionar Pokemon</p>
          <p class="links">Sua Pokedex</p>
          <p class="links">Lista de pokemons</p>
        </div>
      </div>

      <div class="col-lg-10" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1>POKEDEX</h1>

        <input type="text" v-model="pokeName">

        <button @click="searchPokemon(pokeName);">Click</button>

        <h1>{{ pokeChosen }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';


let pokemon: string | any[] = []

let pokeName = ref()

let pokeChosen = ref()

let searchPokemon = (name: string) => {
  console.log(pokemon)
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].name == name) {
      console.log(pokemon[i])
      pokeChosen.value = pokemon[i].name
    }
  }
  return null
}

onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1292').then(res => res.json()).then(res => { pokemon = res.results; console.log(pokemon) })
})


</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Isso garante que o tamanho total de um elemento inclua a borda e o preenchimento, não apenas o conteúdo */
}

.sidebar{
  height: 100vh;
  background-color:rgb(80, 179, 249) ;
}

.links{
  font-family: 'Pixelify Sans', cursive;
  font-size: 22px !important;
  color: yellow;
  font-weight: 500;
  margin-top: 5%;
}

.links:hover{
  color: red;
  cursor: pointer;
  text-decoration: underline;
}
</style>