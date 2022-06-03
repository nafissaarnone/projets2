<template>
    <p class=" mt-8 mb-4 w-full text-[33px] bg-[#e6f2dd] font-bold text-center text-black">ARTISTES</p>
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
  <p class="relative mt-5 p-3 w-max" >Les titres du moment</p>
  <rect/>
</div>

<div class="ml-4 mt-4 flex w-[1000px] gap-5">
<img src="/image/beyonce.jpg" alt="beyonce">
<img src="/image/rema2.jpg" alt="rema">
<img src="/image/pookie.jpg" alt="pookie">
</div>

<div class="ml-4 mt-4 flex w-[1000px] gap-5">
  <img src="/image/burnabor.jpg" alt="">
  <img src="/image/joro.jpg" alt="">
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
  <p class="relative mt-5 p-3 w-max" >albums</p>
  <rect/>
</div>

<div class="ml-4 mt-4 flex w-[1000px] gap-5">
<img src="/image/5.jpg" alt="beyonce">
<img src="/image/4.jpg" alt="rema">
<img src="/image/2.jpg" alt="pookie">
</div>

<div class="ml-4 mt-4 flex w-[1000px] gap-5">
  <img src="/image/1.jpg" alt="">
  <img src="/image/3.jpg" alt="">
</div>

  <div>
    <h1>Les titres du festival</h1>
    <section>
      <h2>Modifier la liste des titres</h2>
      <div>
          <div>
              <div>
                  <span>Nouveau titre</span>
              </div>
                <input placeholder="Complétez avec un nom" v-model='nom' required>Nom de la musique
                <input placeholder="Complétez avec le nom de l'artiste" v-model='artiste' required> Nom de l'artiste
                <button type="button" @click='createTitres()' title="Création">
                  <SaveIcon class="w-6 h-6"/>
                </button>                  
          </div>
          <div>
            <table>
              <thead>
                  <tr>
                    <th scope="col">Id <underline/></th>
                    <th scope="col">Nom <underline/></th>
                    <th scope="col">Artiste <underline/></th>
                    <th scope="col">Actions <underline/></th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for='titres in listeTitres' :key='titres.id'>
                  <td>{{titres.id}}</td>
                  <td>
                    <input type='text' v-model='titres.nom' />
                  </td>
                  <td>
                    <input type='text' v-model='titres.artiste' />
                  </td>
                  <td>
                    <button @click.prevent="updateTitres(titres)">
                      <p>Modifier</p>
                      <PencilAltIcon class="w-10 h-10"/>
                    </button>
                    <button @click.prevent="deleteTitres(titres)">
                      <p>Supprimer</p>
                      <XIcon class="w-10 h-10"/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </section>
  </div>
    
</template>

<script>
import { SaveIcon, XIcon, PencilAltIcon } from "@heroicons/vue/outline"

import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
import { getStorage, ref, uploadString } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

 
export default {
    components:{ SaveIcon, XIcon, PencilAltIcon },
    data() {
        return {
            listeTitres:[],
            titres:{
                nom:null,
                artiste:null,
            },
        }
    },

    mounted(){
        this.getTitres();
    },

    methods : {

        async getTitres(){
            const firestore = getFirestore();
            const dbTitres = collection(firestore, "titres");          
            const q = query(dbTitres, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeTitres = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))  
            console.log("Liste des titres", this.listeTitres);      
            })      
        },

        async createTitres(){
          const firestore = getFirestore();
          const dbTitres = collection(firestore, "titres");
          const docRef = await addDoc(dbTitres,{
            nom:this.nom,
            artiste:this.artiste
          })
          console.log("Document créé avec l'id : ", docRef.id);
        },

        async updateTitres(titres){
          const firestore = getFirestore();
          const docRef = doc(firestore, "titres", titres.id);
          await updateDoc(docRef, {
            nom:titres.nom,
            artiste:titres.artiste
          })       
        },

        async deleteTitres(titres){
          const firestore = getFirestore();
          const docRef = doc(firestore, "titres", titres.id);
          await deleteDoc(docRef);      
        },

    }
    
}
</script>