<template>

  <div class="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-lime-500 to-orange-400">

  <RouterView />
 </div>
   <footer class="bg-white ">
      <a href="/"  class="font-manuale text-xs ">NOUS CONTACTER</a>

      <a href="/"  class="font-manuale text-xs ">MENTIONS LÉGALES</a>

      <P class="font">SUIVEZ NOUS</P>

      <img src="../../logo/kisspng-social-media-facebook-computer-icons-social-networ-like-us-on-facebook-5ac99d251fd3f0 1 (1).svg" alt="">
    </footer>


</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon },
};
</script>