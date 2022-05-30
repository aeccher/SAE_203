<template>
  <main class="grid place-content-center bg-Vert pt-14 pb-16">
    <card-programmation title="Cendres" genre=" Musiques actuelles" img_card="src/assets/card_image1.jpg" alt="visuel du groupe Cendres" />
    <div class="pt-12">
      <card-programmation
        title="2PanHeads"
        genre=" Musiques actuelles"
        img_card="src/assets/card_image2.jpg"
        alt="visuel du groupe 2PanHeads"
      />
      <div class="pt-12">
        <card-programmation title="#TRAD'" genre="Musiques du monde" img_card="src/assets/card_image3.jpg" alt="visuel du groupe #TRAD'" />
      </div>
    </div>
    <div class="pt-12">
      <card-programmation
        title="AMA meets Bandikoot"
        genre="Musiques du monde"
        img_card="src/assets/card_image4.jpg"
        alt="visuel du groupe AMA meets Bandikoot"
      />
    </div>
    <div class="pt-12">
      <card-programmation
        title="Junge sinfoniker Frankfurt"
        genre="Musiques classiques"
        img_card="src/assets/card_image5.jpg"
        alt="visuel du groupe Junge sinfoniker Frankfurt"
      />
    </div>
    <div class="pt-12">
      <card-programmation
        title="Al pari quartet"
        genre="Musiques classiques"
        img_card="src/assets/card_image6.jpg"
        alt="visuel du groupe Al pari quartet"
      />
    </div>
  </main>
</template>

<script>
import CardProgrammation from "../components/CardProgrammation.vue";
export default {
  components: { CardProgrammation },
};
</script>