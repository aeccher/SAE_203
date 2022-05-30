<template>
  <main class="grid gap-12 gap-x-4 bg-Bleu pl-36 pt-14 pb-16 ipad_mini:grid-cols-2 bureau:grid-cols-3">
    <card-artistes
      title="Cendres"
      lieu="FRANCE / Châlons-sur-Saône – Métal"
      img_card="src/assets/card_image1.jpg"
      alt="visuel du groupe Cendres"
    />

    <card-artistes
      title="2PanHeads"
      lieu="FRANCE / Metz Rock, Post Punk"
      img_card="src/assets/card_image2.jpg"
      alt="visuel du groupe 2PanHeads"
    />

    <card-artistes
      title="#TRAD'"
      lieu="FRANCE / Gannat Traditionnel du Massif central"
      img_card="src/assets/card_image3.jpg"
      alt="visuel du groupe #TRAD'"
    />

    <card-artistes
      title="AMA meets Bandikoot"
      lieu="FRANCE / Burkina Faso  Electro dub"
      img_card="src/assets/card_image4.jpg"
      alt="visuel du groupe AMA meets Bandikoot"
    />

    <card-artistes
      title="Junge sinfoniker Frankfurt"
      lieu="ALLEMAGNE / Orchestre"
      img_card="src/assets/card_image5.jpg"
      alt="visuel du groupe Junge sinfoniker Frankfurt"
    />

    <card-artistes
      title="Al pari quartet"
      lieu="POLOGNE / Quatuor à cordes"
      img_card="src/assets/card_image6.jpg"
      alt="visuel du groupe Al pari quartet"
    />
  </main>
</template>

<script>
import CardArtistes from "../components/CardArtistes.vue";

export default {
  components: { CardArtistes },
};
</script>