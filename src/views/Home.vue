<template>
  <div class="home">
    <div class="info-container">
      <h1 class="header">STOCKHOLM POP FESTIVAL IS BACK IN 2021</h1>
      <p>
        The first artists are announced for 2021, we miss u and will see u again
        September 4-5!
      </p>
    </div>
    <Artist :listOfArtists="listOfArtists" />
  </div>
</template>

<script>
import Artist from "@/components/artist.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
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

.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  .info-container {
    background-color: base.$primary-ghost-color;
    box-shadow: 0.2em 0.2em 6px 0.05em #e1e1e1;
    margin: 2.5em;
    padding: 1.5em;
    color: base.$primary-green-blue;

    h1 {
      font-family: base.$primary-h1-font;
    }
    p {
      color: grey;
    }
  }
}

@media screen and (min-width: 800px) {
  .info-container {
    width: 65%;
  }
}
</style>