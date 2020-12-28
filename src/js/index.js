import { router } from "./router/router";

window.addEventListener('hashchange', router);
window.addEventListener('load', router);