<template>
  <main class="bg-Bleu pl-36 pt-36 pb-96">
    <form enctype="multipart/form-data" @submit.prevent="updateArtistes">
      <h1 class="pl-9 font-roboto text-2xl font-bold text-white ipad_mini:text-3xl">Mise à jour de l'artiste</h1>
      <img :src="imageData" />
      <input class="rounded-lg font-roboto text-base ipad_mini:text-xl" placeholder="Nom de l'artiste" v-model="artiste.title" required />
      <input class="rounded-lg font-roboto text-base ipad_mini:text-xl" placeholder="Lieu de provenance" v-model="artiste.lieu" required />
      <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
      <label class="custom-file-label" for="file">Sélectionner l'image</label>
      <button class="w-auto rounded-lg bg-Noir text-center font-roboto text-base text-white ipad_mini:text-xl" type="submit">
        Modifier
      </button>
      <button class="w-auto rounded-lg bg-Noir text-center font-roboto text-base text-white ipad_mini:text-xl">
        <Router-link to="/artistes">Cancel</Router-link>
      </button>
    </form>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  getDoc,
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "UpdateArtistesView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      artiste: {
        // La fiche de l'artiste à créer
        title: null, // son nom
        lieu: null, // son style de musique
        photo: null, // sa photo (nom du fichier)
      },
      refArtiste: null, // Référence de l'artiste à modifier
      imgModifiee: false, // Indique si l'image de l'artiste a été modifiée, par défaut : non
      photoActuelle: null, // Photo actuelle de l'artiste
    };
  },

  mounted() {
    // Montage de la vue
    // récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche participant concerné
    this.getArtistes(this.$route.params.id);
  },
  methods: {
    async getArtistes(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection) document artiste
      // Récupération sur Firestore de l'artiste via son id
      const docRef = doc(firestore, "artiste", id);
      // Référence de l'artiste concerné
      this.refArtiste = await getDoc(docRef);
      // Test si l'artiste demandé existe
      if (this.refArtiste.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtiste.data();
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      // Mise à jour de la photo de l'artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo de l'artiste
      this.artiste.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
      // Reference to the DOm input element
      // Reference du fichier à prévisusaliser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Création d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fontion callback appelée lorsque le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Démarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateArtistes() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Références du fichier
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "artiste/" + this.artiste.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.artiste.photo);
        });
      }
      // Mise à jour de l'artiste dans Firestore
      const firestore = getFirestore();
      // Modification de l'artiste à partir de son id
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      // redirection sur la liste des artistes
      this.$router.push("/artistes");
    },
  },
};
</script>
