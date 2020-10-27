<template>
  <div class="artistId-container">
    <img class="image" :src="image" alt="" />
    <div class="name">{{ name }}</div>
    <div class="info">{{ info }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    info: String,
  },
};
</script>

<style lang="scss">
@use '@/styles/base.scss';

.artistId-container {
  width: 60%;
  background-color: base.$primary-bg;
  padding: 20px;
  margin: 1em;
  color: grey;
  font-size: 16px;
  box-shadow: 0.1em 0.1em 6px 0em #e1e1e1;

  .image {
    width: 100%;
    margin-bottom: 0.8em;
  }
}

@media screen and (max-width: 350px) {
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 800px) {
}

// $breakpoin-small: 350px;
// $breakpoin-medium: 600px;
// $breakpoin-big: 800px;

// @media screen and (max-width: $breakpoint-small) {
// }
// @media screen and (min-width: $breakpoint-medium) {
// }
// @media screen and (min-width: $breakpoint-big) {
// }
</style>