import New from "./pages/New.js";
import App from "./App";
import About from "./pages/About.js";
import Show from "./pages/Show.js";
import Cart from "./pages/Cart.js";

const routes = [
  {
    path: "/new",
    name: "New Page",
    component: New,
  },

  {
    path: "/about",
    name: "About Page",
    component: About,
  },
  {
    path: "/checkout",
    name: "Checkout Page",
    component: Cart,
  },
  {
    path: "/:id",
    name: "Show Page",
    component: Show,
  },
  {
    path: "/",
    name: "Home Page",
    component: App,
  },
];

export default routes;
