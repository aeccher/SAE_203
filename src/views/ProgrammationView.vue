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
    </div>
  </main>
</template>

<script>
import CardProgrammation from "../components/CardProgrammation.vue";
export default {
  components: { CardProgrammation },
};
</script>