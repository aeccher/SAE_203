<template>
  <main class="bg-Orange">
    <div class="pt-16 pl-10 pb-64 bureau:flex">
      <img :src="artiste.photo" :alt="artiste.title" />
      <div class="bureau:pl-5">
        <p class="pt-6 font-mate text-xs ipad_mini:text-xl">{{ artiste.genre }}</p>
        <p class="font-roboto text-2xl font-bold ipad_mini:text-3xl">{{ artiste.title }}</p>
        <p class="font-mate text-xs italic ipad_mini:text-xl">{{ artiste.lieu }}</p>
        <p class="pt-3 font-mate text-xs ipad_mini:text-xl ipad_mini:leading-8">
          {{ artiste.description }}
        </p>
      </div>
    </div>
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
  name: "ArtisteView",
  data() {
    return {
      artiste: {
        title: null, // son nom de scène
        lieu: null, // son lieu de proveneance
        photo: null, // sa photo (nom du fichier)
        description: null, // sa description
      },
    };
  },

  mounted() {
    // Montage de la vue
    // récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id artiste", this.$route.params.id);
    // Recherche artiste concerné
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
        this.console.log("Artsite inexistant");
      }
      // Obtenir le Cloud Storage
      const storage = getStorage();
      // Récupération de l'image par son nom de fichier
      const spaceRef = ref(storage, "artiste/" + this.artiste.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // On remplace le nom du fichier
          // Par l'url complète de la photo
          this.artiste.photo = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
  },
};
</script>


