<template>
  <div class="contact">
    <img
      class="concert-contact-pic"
      alt="Vue logo"
      src="../assets/live-concert-455762_1920.jpg"
    />
    <div class="contact-info">
      <h3>Contact</h3>
      <p>
        Om du har några frågor kan du kontakta oss via: info@stockholmpop.se,
        och så hör vi av oss så snabbt vi kan.
      </p>
      <p>Vid pressfrågor vänligen kontakta: press@stockholmpop.se</p>
      <div class="contact-icons">
        <a href="https://www.instagram.com/" target="_blank">
          <img src="../assets/icons/instagram-icon.svg" alt="instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="../assets/icons/facebook-icon.svg" alt="facebook" />
        </a>
        <a
          href="https://www.spotify.com/se/premium/?utm_source=se_brand_contextual_text&utm_medium=paidsearch&utm_campaign=alwayson_europe_se_performancemarketing_core_brand+contextual+text+exact+se+google&gclid=Cj0KCQjwit_8BRCoARIsAIx3Rj5wzTSwmtwrwGFJzmyKdm60hMAKkJKFMTZw8fRc79GnbpIs8DFarkoaAp1MEALw_wcB&gclsrc=aw.ds"
          target="_blank"
        >
          <img src="../assets/icons/spotify-icon.svg" alt="spotify" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use '@/styles/base.scss';

.contact {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3em;
  .contact-info {
    margin: 2em;
    h3 {
      font-family: base.$primary-h1-font;
    }
  }
  .concert-contact-pic {
    width: 100%;
    box-shadow: 0.2em 0.2em 6px 0.05em #e1e1e1;
  }
  .contact-icons {
    img {
      width: 2.5em;
      margin: 1em;
    }
  }
}

@media screen and (min-width: 600px) {
  .concert-contact-pic {
    width: 50%;
  }
}
@media screen and (min-width: 800px) {
  .contact {
    flex-direction: row;
    padding-top: 6em;
    .concert-contact-pic {
      width: 50%;
    }

    .contact-icons {
      img:hover {
        width: 2.7em;
        margin: 1em;
      }
    }
  }
}
</style>
