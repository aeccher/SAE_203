<template>
  <main class="flex h-screen w-full flex-col items-center justify-center bg-Noir">
    <h1 class="text-9xl font-extrabold tracking-widest text-white">404</h1>
    <div class="absolute rotate-12 rounded bg-Jaune px-2 text-sm">Page non trouvée</div>
    <button class="mt-5">
      <a class="group relative inline-block text-sm font-medium text-Jaune focus:outline-none focus:ring active:text-Jaune">
        <span
          class="
            absolute
            inset-0
            translate-x-0.5 translate-y-0.5
            bg-Jaune
            transition-transform
            group-hover:translate-y-0 group-hover:translate-x-0
          "
        ></span>

        <span class="relative block border border-current bg-Noir px-8 py-3">
          <router-link to="/">Accueil</router-link>
        </span>
      </a>
    </button>
  </main>
</template>