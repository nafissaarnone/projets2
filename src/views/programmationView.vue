<template>
<menuApp></menuApp>
        <div class="relative mt-7 flex justify-center  w-full  gap-2.5 px-7 py-[9px] bg-[#e6f2dd]"
  >
    <p class="flex-grow-0 flex-shrink-0 text-[38px] font-bold text-left text-black">
      PROGRAMMATION
    </p>
  </div>

  <p class="font-manuale text-center text-xs p-6 ">Les meilleurs jours de votre vie</p>

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
<p class="relative p-3 w-max text-lime-500 font-extrabold" >JOUR 1</p>
    </div>

    <H2 class="font-manuale text-center text-xs p-2 text-2xl">4 AOUT 2022</H2>
     <H2 class="font-manuale text-center leading-[1rem] text-xs text-2xl">20h00-6h00</H2>

     <H2 class="font-manuale text-center text-xs p-8 mt-14 ">AFROBEAT</H2>

<div class="">
     <div class="flex justify-center md:mx-72">
       <img class="w-screen " src="../../image/f1.jpg" alt="">
       <img class="w-screen " src="../../image/f2.jpg" alt="">
       <img class="w-screen " src="../../image/f3.jpg" alt="">


     </div>
     </div>

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
<p class="relative p-3 w-max text-neutral-900 mt-8 mb-8 font-extrabold" >VOS ARTISTES</p>
</div>

<div class="flex justify-evenly items-center">
<div class="font-manuale  leading-[1,2rem] md:text-2xl ">
<h3> YEMI ALADE </h3>          
<h3>OUMOU SANGARE</h3>
<h3>MR EAZI</h3>
<h3>BURNA BOY</h3>

</div>

    <div class="font-manuale text-right mr-4 ">
      <h3>SAINT JHN</h3>
      <h3>TIWA</h3>
      <h3>TEKNO MILES</h3>
      <h3>AYA</h3>
    </div>
   

</div>



</template>

<script>
import trait from '../components/icons/TraitView.vue'
import menuApp from '../components/menuApp.vue';
export default {
  components: {
menuApp , trait
  }
};
</script>