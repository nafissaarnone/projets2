<template>
  <nav>
      <div class="bg-transparent">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between">
                <!-- Menu -->
                <div class="flex space-x-4 justify-between">
                    <!-- Logo -->
                    <div class="flex items-center justify-between py-5 px-2">
                        <RouterLink to="/"><img  class="w-14" src="../../logo/Group1.svg"></RouterLink>
                    </div>
                    <!-- Menu -->
                    <div class="hidden text-white ipad_pro:flex  items-center space-x-1">
                    <RouterLink to="/" class="py-5 px-2 hover:font-bold">Accueil</RouterLink>
                    <RouterLink to="/artistes" class="py-5 px-2 hover:font-bold">Artistes</RouterLink>
                    <RouterLink to="/contact" class="py-5 px-2 hover:font-bold">Contact</RouterLink>
                    <RouterLink to="/festival" class="py-5 px-2 hover:font-bold">Festival</RouterLink>
                    <RouterLink to="/mentionslégale" class="py-5 px-2 hover:font-bold">Mention Légale</RouterLink>
                    <RouterLink to="/programmation" class="py-5 px-2 hover:font-bold ">Programmation</RouterLink>
                    <RouterLink to="/guide" class="py-5 px-2 hover:font-bold ">guide</RouterLink>
                    <RouterLink to="/Artiste" class="py-5 px-2 hover:font-bold">Playlist</RouterLink>
                    
                    </div>

                  
                </div>
               

                <!-- Bouton menu -->
                <div class="ipad_pro:hidden flex items-center">
                    <button @click="menuVisible = !menuVisible" class=" py-5 px-2 "> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
      </div>
      <!-- Menu mobile -->
      <div class="text-white bg-transparent ipad_pro:hidden" :class="{hidden: menuVisible}">
      <RouterLink to="/" class="py-2 px-4 hover:font-bold">Accueil</RouterLink>
            <RouterLink to="/artistes" class="block py-2 px-4  bg-transparent">Artistes</RouterLink>
            <RouterLink to="/contact" class="block py-2 px-4  bg-transparent">Contact</RouterLink>
            <RouterLink to="/festival" class="block py-2 px-4  bg-transparent">Festival</RouterLink>
            <RouterLink to="/mentionslegale" class="block py-2 px-4  bg-transparent">Mention Légale</RouterLink>
            <RouterLink to="/programmation" class="block py-2 px-4  bg-transparent ">Programmation</RouterLink>
            <RouterLink to="/Artiste" class="block py-2 px-4  bg-transparent ">Playlist</RouterLink>
      </div>
  </nav>

</template>

<script setup>
import {ref} from 'vue';

const menuVisible = ref(true);


</script>