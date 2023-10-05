<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 sidebar">
        <div class="link-box" style="margin-top: 15%; margin-left: 2%;">
          <router-link to="/pokedex" style="text-decoration: none; color: inherit;">
            <div class="links">Sua Pokedex</div>
          </router-link>
          <router-link to="/" style="text-decoration: none; color: inherit;">
              <p class="links">Adicionar Pokemon</p>
          </router-link>
          <router-link to="/pokelist" style="text-decoration: none; color: inherit;">
          <p class="links">Lista de pokemons</p>
        </router-link>
        </div>
      </div>

      <div class="col-lg-10" style="display: flex; flex-direction: column; align-items: center; background-color: rgb(247, 237, 225);">
        <div class="logo_pokemon" style="display: flex;justify-content: center;align-items: center;">
          <img src="../assets/pokemon-removebg-preview.png" alt="" style="width: 70%;">
        </div>

        <h1 class="title_poke">Adicione Um Pokemon</h1>

        <input type="text" v-model="pokeName" placeholder="Ex: Charmander" style="width: 30%; padding: 0.5%; margin-top: 3% ;border-radius: 10px; border:1px solid black ;outline: 0; ">

        <button class="add_btn" @click="addPokemon(pokeName);" style="">Clique Aqui</button>

        <h1 v-if="showText" style="margin-top: 5%;align-items: center; margin-left: 3%;">{{ pokeChosen }} foi adicionado a sua pokedex</h1>
        <h1 v-if="showFullText" style="margin-top: 5%;align-items: center; margin-left: 3%;">Sua Pokedex Esta Cheia</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { pokeChosen,pokeList } from '../store/store'

function sleep(milliseconds: number) {
    let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
      if (elapsedTime > milliseconds) {
        break;
      }
    }
  }

let pokemon: string | any[] = []

let pokeName = ref()

let showText = ref(false)

let showFullText = ref(false)

let addPokemon =  (name: string) => {
  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].name == name.toLowerCase()) {
      pokeChosen.value = pokemon[i].name[0].toUpperCase() + pokemon[i].name.substring(1)
        if(pokeList.value.length <= 19){
          pokeList.value.push(pokeChosen.value)
          showText.value = true
          setTimeout(()=>{showText.value = false;}, 3000)
        }else{
          showFullText.value = true
        }
    }
  }
  return null
}

onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1292').then(res => res.json()).then(res => { pokemon = res.results; })
})


</script>


<style scoped>
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

.title_poke{
  font-family: 'Pixelify Sans', cursive;
  color: green;
}

.add_btn{
  padding: 0.7%; 
  margin-top: 3%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: red;
  color: white;
  outline: 0;
}

.add_btn:hover{
  text-decoration: underline;
  
}
</style>