<template>
  <main class="bg-Vert pl-36 pt-14 pb-16">
    <form enctype="multipart/form-data" @submit.prevent="createArtiste">
      <h1 class="pl-9 font-roboto text-2xl font-bold text-white ipad_mini:text-3xl">Création participant</h1>
      <input placeholder="Nom de l'artiste" v-model="artiste.title" required />
      <input placeholder="Genre de musique" v-model="artiste.genre" required />
      <button type="submit">Créer</button>
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
  name: "CreateProgrammationView",
  data() {
    return {
      artiste: {
        // La fiche de l'artiste à créer
        title: null, // son nom
        genre: null, // son style de musique
      },
    };
  },

  methods: {
    async createArtiste() {
      // Création de l'artsite sur le Firestore
      const db = getFirestore();
      const docRef = addDoc(collection(db, "artiste"), this.artiste);

      // redirection sur la liste des participants
      this.$router.push("/programmation");
    },
  },
};
</script>
