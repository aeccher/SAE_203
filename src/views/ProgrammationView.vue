<template>
  <main class="bg-Vert pl-36 pt-14 pb-16">
    <Router-link to="/concert">
      <div class="grid gap-12 gap-x-4 ipad_mini:grid-cols-2 bureau:grid-cols-3">
        <card-programmation
          v-for="artiste in listeProgrammation"
          :key="artiste.id"
          :title="artiste.title"
          :genre="artiste.genre"
          :img_card="artiste.photo"
        />
      </div>
    </Router-link>
  </main>
</template>

<script>
import CardProgrammation from "../components/CardProgrammation.vue";

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
  name: "ProgrammationView",
  components: { CardProgrammation },
  data() {
    return {
      listeProgrammation: [],
    };
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des artistes
    this.getProgrammation();
  },

  methods: {
    async getProgrammation() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document artistes
      const dbProgrammation = collection(firestore, "artiste");
      // Liste des artistes synchronisée
      const query = await onSnapshot(dbProgrammation, (snapshot) => {
        console.log("query", query);
        //  Récupération des résultats dans listeArtiste
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeProgrammation = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("listeartiste", this.listeProgrammation);
        // Récupération des images de chaque artiste
        // parcours de la liste
        this.listeProgrammation.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "artiste/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>