<template>
  <main class="bg-Rouge p-48">
    <card-concert
      date="21H00 - Jeudi 5 Janvier "
      lieu="Scène Gentiane"
      img_card="src/assets/card_image1.jpg"
      alt="visuel du groupe Cendres"
    />
  </main>
</template>

<script>
import CardConcert from "../components/CardConcert.vue";
export default {
  components: { CardConcert },
};
</script>