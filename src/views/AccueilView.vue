<template>
  <main class="bg-Noir pb-16">
    <Router-link to="/programmation">
      <img class="w-full" src="../assets/programmation.jpg" alt="calendrier de programmation" />
      <div class="h-14 w-full bg-Vert pt-2 text-center font-roboto text-2xl font-bold">PROGRAMMATION</div>
    </Router-link>
    <Router-link to="/artistes">
      <img class="w-full pt-14" src="../assets/artistes.jpg" alt="artiste en train de chanter sur scène" />
      <div class="h-14 w-full bg-Bleu pt-2 text-center font-roboto text-2xl font-bold">ARTISTES</div>
    </Router-link>
    <Router-link to="/festival">
      <img class="w-full pt-14" src="../assets/festival.jpg" alt="foule assistant à un concert" />
      <div class="h-14 w-full bg-Violet pt-2 text-center font-roboto text-2xl font-bold">FESTIVAL</div>
    </Router-link>
  </main>
</template>

<script>
export default {};
</script>