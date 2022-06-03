<template>
    <div class="py-36">
        <form enctype="multipart/form-data"  @submit.prevent="deleteArtistes">
            <div>

                <div>
                    <h5 style="color:white;">Suppression d'un artiste</h5>
                </div>    

                <div>   
                    <div>
                        <div>
                            <div>
                                <img :src="photoActuelle"/>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <span>Nom</span>
                                </div>
                                <input 
                                    placeholder="Nom de la personne"
                                    v-model="artistes.nom"
                                    disabled />                    
                            </div>
                            <br/>
                        </div>
                    </div>         
                    <br/>      
                    <h5 role="alert">
                        Attention vous allez supprimer ce participant, cette action est irréversible !!
                    </h5>
                </div>

                <div class="card-footer">   
                    <button type="submit">
                        Supprimer
                    </button>
                    <button>
                        <RouterLink to="/artistes">Cancel</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    doc, 
    getDoc,
    deleteDoc, 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    deleteObject
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    data() {
        return {
            artistes:{           // Le participant à créer
                nom:null,    
                photo:null,         
            },

            refArtistes:null,     // Référence du participant à modifier
            photoActuelle:null       // Photo actuelle du participant
        }
    },
    mounted(){ // Montage de la vue
        // Récupération du id passé en paramètre
        // On utilise le id passé par la route
        // via la variable système $route de la vue
console.log("id artistes", this.$route.params.id);
        // Recherche participant concerné
        this.getArtistes(this.$route.params.id);
    },

    methods :{

        async getArtistes(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "artistes", id);
            // Référence du participant concerné
            this.refArtistes = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refArtistes.exists()){
                // Si oui on récupère ses données
                this.artistes = this.refArtistes.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.artistes.photo;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Participant inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'artistes/'+this.artistes.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteArtistes(){
            const firestore = getFirestore();
            // Suppresion du participant
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));

            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'artistes/'+this.artistes.photo);
            // Suppression du fichier
            deleteObject(docRef);

            // redirection sur la liste des participants
            this.$router.push('/artistes');       
        }
    }

}
</script>

<style scoped>
a{
    color:white;
}
a:hover{
    text-decoration:none;
}
</style>


