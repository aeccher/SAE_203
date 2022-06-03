<template>
  <main class="bg-Bleu pl-36 pt-14 pb-16">
    <form enctype="multipart/form-data" @submit.prevent="deleteArtistes">
      <h1 class="pl-9 font-roboto text-2xl font-bold text-white ipad_mini:text-3xl">Suppression d'un artiste</h1>
      <img class="preview img-fluid" :src="photoActuelle" />
      <input class="rounded-lg font-roboto text-base ipad_mini:text-xl" placeholder="Nom de l'artiste" v-model="artiste.title" required />
      <input class="rounded-lg font-roboto text-base ipad_mini:text-xl" placeholder="Lieu de provenance" v-model="artiste.lieu" required />
      <p class="text-center font-roboto text-sm" role="alert">
        Attention vous allez supprimer cet artiste, cette action est irréversible !!
      </p>
      <button class="w-auto rounded-lg bg-Noir text-center font-roboto text-base text-white ipad_mini:text-xl" type="submit">
        Supprimer
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
  name: "DeleteArtistesView",
  data() {
    return {
      artiste: {
        // La fiche de l'artiste à créer
        title: null, // son nom
        lieu: null, // son style de musique
        photo: null, // sa photo (nom du fichier)
      },
      refArtiste: null, // Référence de l'artiste à modifier
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
      this.refArtistes = await getDoc(docRef);
      // Test si l'artiste demandé existe
      if (this.refArtistes.exists()) {
        // Si oui on récupère ses données
        this.artiste = this.refArtistes.data();
      } else {
        // Sinon simple message d'erreur
        this.console.log("Artiste inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image de l'artiste
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtistes() {
      const firestore = getFirestore();
      // Suppression de l'artiste
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      // Suppression de l'image
      const storage = getStorage();
      // référence du fichier de la photo
      let docRef = ref(storage, "artiste/" + this.artiste.photo);
      // Supression du fichier
      deleteObject(docRef);

      // redirection sur la liste des artistes
      this.$router.push("/artistes");
    },
  },
};
</script>
