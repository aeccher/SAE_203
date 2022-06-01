<template>
  <main class="bg-Noir font-roboto font-bold text-Jaune">
    <h1 class="text-center text-3xl">Guide de style</h1>

    <h2 class="mt-4 ml-4 text-xl font-bold">Couleurs</h2>

    <div class="mt-4 ml-4 flex justify-evenly">
      <div class="h-24 w-20 rounded-xl border-2 bg-Noir"></div>
      <div class="h-24 w-20 rounded-xl border-2 bg-Violet"></div>
      <div class="h-24 w-20 rounded-xl border-2 bg-Bleu"></div>
      <div class="h-24 w-20 rounded-xl border-2 bg-Vert"></div>
      <div class="h-24 w-20 rounded-xl border-2 bg-Jaune"></div>
      <div class="h-24 w-20 rounded-xl border-2 bg-Orange"></div>
      <div class="h-24 w-20 rounded-xl border-2 bg-Rouge"></div>
    </div>

    <h2 class="mt-8 ml-4 text-xl font-bold">Polices</h2>

    <div class="ml-4 text-white">
      <h3 class="mt-4 text-9xl font-bold">Roboto</h3>

      <p class="mt-2 text-xs italic">12 px Italic</p>
      <p class="mt-2 text-base font-bold">16 px Bold</p>
      <p class="mt-2 text-lg font-bold">20 px Bold</p>
      <p class="mt-2 text-2xl font-bold">25 px Bold</p>
      <p class="mt-2 text-3xl font-bold">50 px Bold</p>

      <h3 class="mt-4 font-mate text-9xl font-bold">Mate</h3>
      <div class="font-mate">
        <p class="mt-2 text-xs">12 px Regular</p>
        <p class="mt-2 text-base">16 px Regular</p>
        <p class="mt-2 text-xl">24 px Regular</p>
      </div>
    </div>

    <h2 class="mt-8 ml-4 text-xl font-bold">Icônes</h2>
    <div class="mt-4 ml-4">
      <icon-menu />
    </div>

    <h2 class="mt-8 ml-4 text-xl font-bold">Composants</h2>
    <div class="grid place-content-center ipad_mini:flex ipad_mini:justify-evenly">
      <card-artistes
        class="mt-4 ml-4 border-2"
        title="Cendres"
        lieu="FRANCE / Châlons-sur-Saône – Métal"
        img_card="src/assets/card_image1.jpg"
        alt="visuel du groupe Cendres"
      />

      <card-programmation
        class="mt-4 ml-4 border-2"
        title="Cendres"
        genre=" Musiques actuelles"
        img_card="src/assets/card_image1.jpg"
        alt="visuel du groupe Cendres"
      />
    </div>
  </main>
</template>

<script >
import CardArtistes from "../components/CardArtistes.vue";
import CardConcert from "../components/CardConcert.vue";
import CardProgrammation from "../components/CardProgrammation.vue";
import IconMenu from "../components/icons/IconMenu.vue";
export default {
  components: { CardArtistes, IconMenu, CardConcert, CardProgrammation },
};
</script>

