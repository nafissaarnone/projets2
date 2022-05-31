<template>
    
<transition
          enter-active-class="transition duration-3000 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-3000 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems class="flex flex-col bg-black">
            <MenuItem v-slot="{ active }">
              
                <RouterLink to="/" :class="{ 'text-white': active }" class="text-blue-600 underline"> 
                  <div class="flex my-3">
                    <HomeIcon class="stroke-white w-6 mr-3" />
                    <span class="font-roboto">Accueil</span>
                  </div>
                </RouterLink>
              
            </MenuItem>
            
            <MenuItem>
              <RouterLink to="/artistes" :class="{ 'text-white': active }" class="text-blue-600 underline">
                <div class="flex mb-3">
                    <NewspaperIcon class="stroke-white w-6 mr-3 "/>
                     <span class="font-roboto">Programme</span>
                </div> 
              </RouterLink>
            </MenuItem>

          </MenuItems>
        </transition>`
        </template>

        <script>
import { MenuIcon, HomeIcon, NewspaperIcon, UserGroupIcon, MailOpenIcon } from "@heroicons/vue/outline";
export default {
  components: { MenuIcon, HomeIcon, NewspaperIcon, UserGroupIcon,  MailOpenIcon   },
};

</script>