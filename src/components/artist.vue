<template>
  <div class="artists">
    <div class="artist-container">
      <ArtistId
        v-for="artist in listOfArtists"
        :key="artist.id"
        :class="'artist-' + artist.id"
        :name="artist.name"
        :image="artist.image"
      />
    </div>
  </div>
</template>

<script>
import ArtistId from "./artistID.vue";

export default {
  components: {
    ArtistId,
  },
  props: {
    listOfArtists: Array,
  },
};
</script>

<style lang="scss">
@use '@/styles/base.scss';

.artist-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 4em;
}

@media screen and (max-width: 350px) {
}
@media screen and (min-width: 600px) {
  .artist-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 800px) {
  .artist-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
