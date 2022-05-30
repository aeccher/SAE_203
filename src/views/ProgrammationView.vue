<template>
  <main class="grid gap-12 gap-x-4 bg-Vert pl-36 pt-14 pb-16 ipad_mini:grid-cols-2 bureau:grid-cols-3">
    <Router-link to="/concert">
      <card-programmation
        title="Cendres"
        genre=" Musiques actuelles"
        img_card="src/assets/card_image1.jpg"
        alt="visuel du groupe Cendres"
      />
    </Router-link>

    <card-programmation
      title="2PanHeads"
      genre=" Musiques actuelles"
      img_card="src/assets/card_image2.jpg"
      alt="visuel du groupe 2PanHeads"
    />

    <card-programmation title="#TRAD'" genre="Musiques du monde" img_card="src/assets/card_image3.jpg" alt="visuel du groupe #TRAD'" />

    <card-programmation
      title="AMA meets Bandikoot"
      genre="Musiques du monde"
      img_card="src/assets/card_image4.jpg"
      alt="visuel du groupe AMA meets Bandikoot"
    />

    <card-programmation
      title="Junge sinfoniker Frankfurt"
      genre="Musiques classiques"
      img_card="src/assets/card_image5.jpg"
      alt="visuel du groupe Junge sinfoniker Frankfurt"
    />

    <card-programmation
      title="Al pari quartet"
      genre="Musiques classiques"
      img_card="src/assets/card_image6.jpg"
      alt="visuel du groupe Al pari quartet"
    />
  </main>
</template>

<script>
import CardProgrammation from "../components/CardProgrammation.vue";
export default {
  components: { CardProgrammation },
};
</script>