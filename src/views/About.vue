<template>
  <div class="about">
    <img
      class="concert-pic"
      alt="Vue logo"
      src="../assets/audience-1850119_1920.jpg"
    />
    <div class="about-info">
      <h1>This is Stockholm Pop Festival</h1>
      <p>
        Stockholm pop festival grundades 2011 och blev en av Nordens största Pop
        festivaler redan efter första året.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/base.scss';

.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3em;

  .concert-pic {
    width: 100%;
    box-shadow: 0.2em 0.2em 6px 0.05em #e1e1e1;
  }
  .about-info {
    margin: 3em;
  }
}

@media screen and (min-width: 600px) {
  .concert-pic {
    width: 50%;
  }
}
@media screen and (min-width: 800px) {
  .about {
    flex-direction: row;
    padding-top: 6em;
    .concert-pic {
      width: 50%;
    }
  }
}
</style>

