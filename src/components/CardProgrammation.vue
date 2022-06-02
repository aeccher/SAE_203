<template >
  <div class="w-72 rounded-lg bg-Noir">
    <img class="rounded-t-lg" :src="img_card" :alt="`Photo du groupe ${title}`" />

    <p class="pl-6 font-mate text-xl text-Vert">
      {{ title }}
    </p>

    <icon-line class="pl-6" />

    <p class="pl-6 font-mate text-xs text-Vert">
      {{ genre }}
    </p>
  </div>
</template>

<script >
import IconLine from "./icons/IconLine.vue";

export default {
  components: { IconLine },
  props: {
    title: { type: String },
    genre: { type: String },
    img_card: String,
  },
};
</script>