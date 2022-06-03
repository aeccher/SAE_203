<template>
  <main class="bg-Bleu pl-36 pt-36 pb-96">
    <form enctype="multipart/form-data" @submit.prevent="createArtistes">
      <h1 class="pl-9 font-roboto text-2xl font-bold text-white ipad_mini:text-3xl">Création d'un artiste</h1>
      <img :src="imageData" />
      <div class="flex justify-around">
        <input class="rounded-lg font-roboto text-base ipad_mini:text-xl" placeholder="Nom de l'artiste" v-model="artiste.title" required />
        <input
          class="rounded-lg font-roboto text-base ipad_mini:text-xl"
          placeholder="Lieu de provenance"
          v-model="artiste.lieu"
          required
        />
        <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
        <label class="custom-file-label" for="file">Sélectionner l'image</label>
      </div>
      <div class="flex justify-end gap-3 p-3">
        <button class="w-auto rounded-lg bg-Noir text-center font-roboto text-base text-white ipad_mini:text-xl" type="submit">
          Créer
        </button>
        <button class="w-auto rounded-lg bg-Noir text-center font-roboto text-base text-white ipad_mini:text-xl">
          <Router-link to="/artsites">Cancel</Router-link>
        </button>
      </div>
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
  name: "CreateArtistesView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      artiste: {
        // La fiche de l'artiste à créer
        title: null, // son nom
        lieu: null, // son style de musique
        photo: null, // sa photo (nom du fichier)
      },
    };
  },

  methods: {
    async createArtistes() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artiste/" + this.artiste.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création de l'artsite sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artiste"), this.artiste);
      });
      // redirection sur la liste des artistes
      this.$router.push("/artistes");
    },

    previewImage: function (event) {
      // Mise à jour de la photo de l'artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo de l'artiste
      this.artiste.photo = this.file.name;
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
  },
};
</script>
