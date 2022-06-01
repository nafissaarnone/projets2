<script>
        export default {
          props: {
            nom: String,
          },
        };
        </script>
<template>
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
<p class="relative p-3 w-max" >{{nom}}</p>
    </div>
</template>