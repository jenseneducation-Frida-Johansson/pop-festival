<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        ><img class="logo" alt="Vue logo" src="./assets/logo.png" />
      </router-link>
      <div class="link-container">
        <router-link to="/about">About</router-link>
        <router-link to="/tickets">Tickets</router-link>
        <router-link to="/artists">Artists</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@use '@/styles/base.scss';

//general styling
h1,
h3 {
  font-family: base.$primary-h1-font;
}

#app {
  font-family: base.$primary-font;
  text-align: center;
  background-color: base.$primary-bg;
  padding: 0;

  #nav {
    padding: 15px;
    margin-bottom: 1em;

    .logo {
      width: 12em;
      cursor: pointer;
    }

    a {
      font-weight: bold;
      color: #000000;
      text-decoration: none;
      margin-top: 1em;
      cursor: pointer;
      text-shadow: 0.5px 0.5px 0.8px #b5b5b5;
    }

    .link-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

@media screen and (max-width: 350px) {
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 800px) {
  #nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    a {
      margin: 0em 1.5em 0em 1.5em;
    }
  }
}
</style>
