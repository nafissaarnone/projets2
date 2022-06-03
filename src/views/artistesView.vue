<template>
  <main class="py-36">
  <p class=" mt-8 mb-4 w-full text-[33px] bg-[#e6f2dd] font-bold text-center text-black">
    ARTISTES
  </p>
  <div>
    <div class="flex justify-end">
      <div class="m-1 ">
        <img class="" src="../../image/savara.jpg" alt="savara">
        <p class="relative top-[-50px] left-[40px] z-10 w-[100px] bg-white text-center text-[18px] "> Savara</p>
      </div>
      <div class="m-1 ">
        <img src="../../image/aya.jpg" alt="aya">
        <p class="relative top-[-50px] left-[40px] z-10 w-[200px] bg-white text-center text-[18px] "> Aya nakamura</p>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="m-1 ">
        <img src="../../image/wizkid.jpg" alt="beyonce">
        <p class="relative top-[-50px] left-[40px] z-10 w-[100px] bg-white text-center text-[18px] "> Wizkid</p>
      </div>
      <div class="m-1 ">
        <img class="" src="../../image/dbngogo.jpg" alt="dbngogo">
        <p class="relative top-[-50px] left-[40px] z-10 w-[100px] bg-white text-center text-[18px] "> dbngogo</p>
      </div>
      <div class="m-1 ">
        <img src="../../public/image/img5.jpg " alt="beyonce">
        <p class="relative top-[-50px] left-[10px] z-10 w-[90px] bg-white text-center text-[18px]"> Beyonce</p>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="m-1 ">
        <img src="../../image/shatta.jpg" alt="SHATTA WALL">
        <p class="relative top-[-50px] left-[40px] z-10 w-[200px] bg-white text-center text-[18px] ">Shatta wall</p>
      </div>
      <div class="m-1 ">
        <img class="" src="../../image/kyala.jpg" alt="KYALA">
        <p class="relative top-[-50px] left-[40px] z-10 w-[100px] bg-white text-center text-[18px] ">Kyala</p>
      </div>
    </div>
  </div>

      <div class="card bg-dark">
        <div class="card-header">
            <h5>Liste des Artistes
                <span class="float-right" title="Créer un nouvel artiste">
                    <router-link to="/CreateArtistes">Creer un artiste
                    </router-link>
                </span>
            </h5>
        </div>    
                        
        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col" class="text-center">Image</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Actions</th>                                
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="artistes in listeArtistes" :key="artistes.id">
                        <td class="text-center">                                        
                            <img class="media-object imageSmall" :src="artistes.photo" 
                            :alt="artistes.nom">                                                                
                        </td>
                        <td><b>{{artistes.nom}}</b></td>
                        <td>
                            <span title="Supprimer le participant" class="mr-2">
                                <RouterLink :to="{ name:'DeleteView', params: { id: artistes.id }}">
                                    <XIcon class="w-6 h-6"/>
                                </RouterLink>
                            </span>
                            <span  title="Modifier le participant" class="mr-2">
                                <RouterLink :to="{ name:'UpdateView', params: { id: artistes.id }}">
                                    <PencilAltIcon class="w-6 h-6"/>
                                </RouterLink>
                            </span>             
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>




</main>

</template>

<script>
import { XIcon, PencilAltIcon } from '@heroicons/vue/outline'
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    // Cloud Storage : import des fonctions
    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
export default {
  components : { XIcon, PencilAltIcon },
  data() {
    return {
            listeArtistes:[]
        }
    },
    mounted(){
        this.getArtistes();
    },
    methods: {
        async getArtistes(){
            const firestore = getFirestore();
            const dbPart = collection(firestore, "artistes");
            const q = query(dbPart, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                this.listeArtistes.forEach(function(artistes){
                    const storage = getStorage();
                    const spaceRef = ref(storage, 'artistes/'+artistes.photo);
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        artistes.photo = url;
                    })
                })
            })      
        },
    }
}
</script>