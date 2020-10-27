<template>
  <div>
    <h3>Announced Artists for 2021</h3>
    <Artist :listOfArtists="listOfArtists" />
    <div class="coming-artist"></div>
  </div>
</template>

<script>
import Artist from "@/components/artist.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Artist,
  },
  computed: {
    ...mapGetters(["listOfArtists"]),
  },
};
</script>

<style lang="scss">
@use '@/styles/base.scss';

.coming-artist {
  display: flex;
  flex-direction: row;
  margin-bottom: 6em;
}
</style>