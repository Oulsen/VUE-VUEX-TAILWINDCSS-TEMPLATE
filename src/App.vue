<template>
  <section class="section">
    <div class="p-5 border-2 rounded-xl bg-gray-600 animate-pulse">
      <p class="text-2xl text-center text-white">VUE-VUEX-TAILWINDCSS TEMPLATE</p>
    </div>
  </section>
</template>

<script>
//VUEX
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([""]),
  },
};
</script>

<style></style>
