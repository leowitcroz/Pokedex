<template>

  <div class="container-fluid" style="display: flex;">

    <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block sidebar" style="height: 100vh; background-color: black;">
                <div class="position-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">
                                Dashboard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Orders
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Products
                            </a>
                        </li>
                        <!-- Add more sidebar items as needed -->
                    </ul>
                </div>
            </nav>

      <div class="col-lg-9">
        <h1>POKEDEX</h1>

        <input type="text" v-model="pokeName">

        <button @click="searchPokemon(pokeName);">Click</button>

        <h1>{{ pokeChosen }}</h1>

      </div>
  
  </div>


  
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';


let pokemon: string | any[] = []

let pokeName = ref()

let pokeChosen = ref()

let searchPokemon = (name: string) =>{
  console.log(pokemon)
  for(let i = 0; i < pokemon.length; i++){
    if(pokemon[i].name == name){
      console.log(pokemon[i])
      pokeChosen.value = pokemon[i].name
    }
  }
  return null
}



onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1292').then(res => res.json()).then(res => {pokemon = res.results; console.log(pokemon)})
})


</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Isso garante que o tamanho total de um elemento inclua a borda e o preenchimento, não apenas o conteúdo */
}

</style>