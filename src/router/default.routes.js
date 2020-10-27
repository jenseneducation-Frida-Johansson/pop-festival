import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tickets from "../views/Tickets.vue";
import Artists from "../views/Artists.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/artists",
    name: "Artists",
    component: Artists,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

export default routes;
