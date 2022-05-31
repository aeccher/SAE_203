<template >
  <div class="w-72 rounded-lg bg-Noir bureau:w-full bureau:object-cover">
    <img class="bureau:h-52 bureau:w-full" :src="img_card" />

    <p class="pl-6 font-mate text-xl text-Vert">
      {{ date }}
    </p>

    <p class="pl-6 font-mate text-xs italic text-Vert">
      {{ lieu }}
    </p>
  </div>
</template>

<script >
export default {
  props: {
    date: { type: String },
    lieu: { type: String },
    img_card: String,
  },
};
</script>