import { HomeComponent, level1, StartGame, ErrorComponent } from "../pages/index";

// Routes 
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/start-game', component: StartGame },
  { path: '/level-1', component: level1 },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = () => {
    // Find the component based on the current path
    const path = parseLocation();
    // If there's no matching route, get the "Error" component
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    // Render the component in the "app" placeholder
    document.body.innerHTML = component.render();
    component.functionality();
  };