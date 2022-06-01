<script>
export default {
  props: {
    nom: String,
    image: String,
  },
};
</script>
<template>
  <figure>
    <div class="mb-10 text-center">
    <h2 class="relative top-[-100px] left-[200px] z-10 w-[100px] bg-white text-center text-[29px] text-rose-600 dark:text-black">
      <img class="m-auto" :src="image" alt="Photo du groupe" />
    </div>
  </figure>
</template>