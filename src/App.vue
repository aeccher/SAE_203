<template>
  <header class="flex justify-between bg-Noir">
    <nav>
      <router-link to="/"
        ><icon-logo />
        <span class="sr-only">Logo retour Accueil</span>
      </router-link>
    </nav>

    <nav class="ml-auto">
      <button
        class="relative z-50 text-xl ipad_mini:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <icon-menu />
      </button>

      <div
        id="menu"
        class="fixed inset-0 z-40 translate-x-full bg-Noir motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }"
      >
        <ul class="pt-10 text-center font-roboto text-8xl">
          <li>
            <Router-link to="/programmation" @click="menuOuvert = false" class="font-roboto text-base text-Jaune"
              >La programmation</Router-link
            >
          </li>
          <li>
            <Router-link to="/artistes" @click="menuOuvert = false" class="font-roboto text-base text-Jaune">Les artistes</Router-link>
          </li>
          <li>
            <Router-link to="/festival" @click="menuOuvert = false" class="font-roboto text-base text-Jaune">Le festival</Router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="hidden flex-auto justify-end gap-24 pt-6 pr-16 ipad_mini:flex">
      <p><Router-link to="/programmation" class="font-roboto text-base text-Jaune">La programmation</Router-link></p>
      <p><Router-link to="/artistes" class="font-roboto text-base text-Jaune">Les artistes</Router-link></p>
      <p><Router-link to="/festival" class="font-roboto text-base text-Jaune">Le Festival</Router-link></p>
    </div>
  </header>

  <router-view />

  <footer class="flex justify-between bg-Noir">
    <icon-facebook />
    <icon-instagram />
    <icon-youtube />
    <p><Router-link to="/contact" class="font-roboto text-sm italic text-Jaune">Nous contacter</Router-link></p>
    <p><Router-link to="/mentionslegales" class="font-roboto text-sm italic text-Jaune">Mentions légales</Router-link></p>
  </footer>
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import IconMenu from "./components/icons/IconMenu.vue";
import IconFacebook from "./components/icons/IconFacebook.vue";
import IconInstagram from "./components/icons/IconInstagram.vue";
import IconYoutube from "./components/icons/IconYoutube.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: { IconLogo, IconMenu, IconFacebook, IconInstagram, IconYoutube },
};
</script>