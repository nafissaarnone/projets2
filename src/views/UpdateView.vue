<template>
    <div class="py-36">
        <form enctype="multipart/form-data"  @submit.prevent="updateArtists">
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Mise à jour de l'artiste</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center">
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="artistes.nom"
                                    required />                    
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-dark" >
                        Modifier
                    </button>
                    <button class="float-right btn btn-dark">
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
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadString,
    deleteObject,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    data() {
        return {
            imageData:null,         // Image prévisualisée
            listeArtites:[],           // Liste des pays pour la nationalité du participant
            participant:{           // Le participant à créer
                nom:null,  
                photo:null,  
            },

            refParticipant:null,     // Référence du participant à modifier
            imgModifiee:false,       // Indique si l'image du participant a été modifiée, par défaut : non
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
                this.console.log("Artiste inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'artistes/'+this.artistes.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.imageData = url;
            })
        },


        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.artistes.photo = this.file.name;
            // Si cette fonction s'exécute, c'est que l'image est modifiée 
            this.imgModifiee = true;
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async updateArtistes(){
            // Si l'image a été modifiée
            if(this.imgModifiee){
                // On supprime l'ancienne
                const storage = getStorage();
                // Référence du fichier
                let docRef = ref(storage, 'artistes/'+this.photoActuelle);
                // Suppression photo actuelle
                deleteObject(docRef);
                // création nouvelle photo
                // Référence de l'image à uploader
                docRef = ref(storage, 'artistes/'+this.artistes.photo);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.artistes.photo);                
                });                   
            }
            // Dans tous les cas on met à jour le participant dans Firestore
            const firestore = getFirestore();
            // Modification du participant à partir de son id
            await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artistes);
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


