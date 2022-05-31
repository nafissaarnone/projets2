<template>
  <main>
    <div>
      <RouterLink to="/artistes">
        <p>artistes</p>
      </Routerlink>
    </div>
  
    <div class="flex justify-center items-center flex-col">
    <h1 class="text-6xl font-manuale">Alkebulan</h1>
    <p class="text- font-manuale">Découvrez la culture de ces artistes </p>
    <img class="" src="../../image/img1acceuil.svg" alt="image1">
    
    <H3 class="text-2xl font-extrabold">AOUT 2022 </H3>
    
    <div class="relative w-max mx-auto">
      <svg class="absolute top-0 left-0 w-full h-full"
  width="170"
  height="48"
  viewBox="0 0 170 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path d="M16.8229 0H170L158.596 48H0L16.8229 0Z" fill="#FFF8F8" fill-opacity="0.8" class="text-2xl font-extrabold ">
  </path>
  
</svg>
<p class="relative p-3 w-max" >Paris</p>
    </div>
    
<H4 class="p-8 leading-[7rem]  text-center text-3xl  font-codystar">Le festival de musique afroBeat</H4>
</div>
     <div class="flex justify-center">
      <div class="bg-purple-800 inline-block p-3 rounded-2xl">
        <a href="/"  class="font-manuale text-xs ">RÉSERVER</a>
      </div>
     </div>  
     <div class="flex justify-center font-extrabold">
     <H5>Actualités </H5>
      <line y1="0.5" x2="90" y2="0.5" stroke="#ACACAC"></line>
     </div>

<div class="flex justify-center p-5">
    <div class="flex items-center flex-col bg-yellow-600 w-[90%]">
      <img class="justify-center w-[90%]  " src="../../image/acceuil.svg" alt="img">
    
       <p class="font-manuale text-center">Rencontre </p>
       <p class="font-manuale p-3"> découvrir vos artistes préférés qui vous ferontg vibrer pendant 4 jours. Beyonce, Rema, Wizkid seront là pour te faire passer d’incroyable concerts. </p>
    </div>
</div>


<div class="ml-5 gap-5 flex w-[27%]">

       <img src="../../image/img2.svg" alt="1">
       <img src="../../image/img3.svg" alt="2">
       <img src="../../image/img4.svg" alt="1">

</div>
     <p class="font-manuale p-28 ml-6 text-xs text-center">Ceux qui ont fait bouger le monde de la musique afrobeat</p>

      <div class="flex justify-center">
      <div class="bg-neutral-500  inline-block p-4 ">
        <h2 class="font-manuale text-xs ">LE FESTIVAL </h2>
      </div>
     </div>  
     <p class="font-manuale text-sm p-9 text-center">qu'est-ce que le festival Alkebulan? Découvrez notre histoire et nos valeur</p>
     <a href="/"  class="font-manuale text-xs text-center ml-40 text-gray-100 ">en savoir plus</a>

      <div class="flex justify-center">
      <div class="bg-neutral-500  inline-block p-4 mt-5 ">
        <h2 class="font-manuale text-xs ">LES ARTISTES </h2>
      </div>
     </div>  
    <p class="font-manuale text-sm p-7 text-center">Venez rencontrer vos artistes</p>
<a href="/"  class="font-manuale text-xs text-center ml-40 text-gray-100 ">en savoir plus</a>

      <div class="flex justify-center">
      <div class="bg-neutral-500  inline-block p-4 ">
        <h2 class="font-manuale text-xs ">PROGRAMMATION </h2>
      </div>
     </div>  
     <P class="font-manuale text-sm p-7 text-center">Tout savoir pour ne rien rater</P>
     <a href="/"  class="font-manuale text-xs text-center ml-40 text-gray-100 ">en savoir plus</a>
<img class="w-[30%] m-auto mt-3 mb-4" src="../../logo/Group1.svg" alt="">

    <div class="flex justify-center">
      <div class="bg-purple-800 inline-block p-2 rounded-2xl m-auto mt-3 mb-4">
        <a href="/"  class="font-manuale text-xs ">DÉCOUVRIR</a>
      </div>
     </div>  

  </main>


</template>



<script>
import trait from '../components/icons/TraitView.vue'
import menuApp from '../components/menuApp.vue';
export default {
  components: {
menuApp
  }
};
</script>