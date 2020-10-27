import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOfArtists: [
      {
        id: 1,
        name: "Amin",
        image: require("@/assets/artists/concert-2561749_1920.jpg"),
      },
      {
        id: 2,
        name: "Father&Son",
        image: require("@/assets/artists/father-3315817_1920.jpg"),
      },
      {
        id: 3,
        name: "James Pink",
        image: require("@/assets/artists/guy.jpg"),
      },
      {
        id: 4,
        name: "BX",
        image: require("@/assets/artists/musician.jpg"),
      },
      {
        id: 5,
        name: "Harry Chames",
        image: require("@/assets/artists/people.jpg"),
      },
      {
        id: 6,
        name: "Isabelle Johnson",
        image: require("@/assets/artists/isabelle.jpg"),
      },
      {
        id: 7,
        name: "Announced soon",
        // image: require("@/assets/artists/people.jpg"),
      },
      {
        id: 8,
        name: "Announced soon",
        // image: require("@/assets/artists/isabelle.jpg"),
      },
    ],
  },
  getters: {
    listOfArtists(state) {
      return state.listOfArtists;
    },
    event: (state) => (id) => {
      return state.listOfArtists.find((event) => event.id == id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
