<template>

  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-lime-500 to-orange-400">
    <menuApp/>
  <RouterView />
 </div>
   <footer class="bg-white ">

     <hr class="mx-10 my-5 border-black ">

     <div class="my-5 flex justify-around">

        <a href="/"  class="font-manuale text-xs ">NOUS CONTACTER</a>

        <a href="/"  class="font-manuale text-xs ">MENTIONS LÉGALES</a>
     </div>

      <p class="font-luckiest w-max mx-auto">SUIVEZ NOUS</p>

      <img class="mx-auto" src="/logo/logo.svg" alt="">
    </footer>


</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
import menuApp from "./components/menuApp.vue";


export default {
  components: { IconLogo, FilmIcon, menuApp },
};
</script>