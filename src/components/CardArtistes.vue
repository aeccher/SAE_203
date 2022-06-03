<template >
  <div class="w-72 rounded-lg bg-Noir">
    <img class="rounded-t-lg" :src="img_card" :alt="`Photo du groupe ${title}`" />

    <p class="pl-6 font-mate text-xl text-Vert">
      {{ title }}
    </p>

    <icon-line class="pl-6" />

    <p class="pl-6 font-mate text-xs italic text-Vert">
      {{ lieu }}
    </p>
    <div class="flex justify-end">
      <Router-link :to="{ name: 'UpdateArtistes', params: { id } }">
        <icon-update />
      </Router-link>

      <Router-link :to="{ name: 'DeleteArtistes', params: { id } }">
        <icon-cross />
      </Router-link>
    </div>
  </div>
</template>

<script >
import IconLine from "./icons/IconLine.vue";
import IconUpdate from "./icons/IconUpdate.vue";
import IconCross from "./icons/IconCross.vue";

export default {
  components: { IconLine, IconUpdate, IconCross },
  props: {
    title: { type: String },
    lieu: { type: String },
    img_card: String,
    id: String,
  },
};
</script>