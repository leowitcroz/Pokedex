<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 sidebar">
        <div class="link-box" style="margin-top: 15%; margin-left: 2%;">
          <router-link to="/pokedex" style="text-decoration: none; color: inherit;">
            <p class="links">Sua Pokedex</p>
          </router-link>
          <router-link to="/" style="text-decoration: none; color: inherit;">
              <p class="links">Adicionar Pokemon</p>
          </router-link>
          <p class="links">Lista de pokemons</p>
        </div>
      </div>

    </div>
  </div>
</template>



<script lang="ts" setup>
import { pokeChosen } from '@/store/store';

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