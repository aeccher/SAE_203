<template>
  <main class="bg-Vert pl-36 pt-14 pb-16">
    <form enctype="multipart/form-data" @submit.prevent="updateArtiste">
      <h1 class="pl-9 font-roboto text-2xl font-bold text-white ipad_mini:text-3xl">Mise à jour de l'artiste</h1>
      <input placeholder="Nom de l'artiste" v-model="artiste.title" required />
      <input placeholder="Genre de musique" v-model="artiste.genre" required />
      <button type="submit">Modifier</button>
      <button>
        <Router-link to="/programmation">Cancel</Router-link>
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
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "UpdateProgrammationView",
  data() {
    return {
      artiste: {
        // La fiche de l'artiste à créer
        title: null, // son nom
        genre: null, // son style de musique
      },
      refArtiste: null, // Référence de l'artiste à modifier
    };
  },

  mounted() {
    // Montage de la vue
    // récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche participant concerné
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    async getArtiste(id) {
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
    },

    async updateArtiste() {
      // Mise à jour de l'artiste dans Firestore
      const firestore = getFirestore();
      // Modification de l'artiste à partir de son id
      await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
      // redirection sur la liste des artistes
      this.$router.push("/programmation");
    },
  },
};
</script>
