import { HomeComponent, level1, StartGame, ErrorComponent, level2, level3, level4, level5, level6, level7, level8, level9, level10 } from "../pages/index";





// Routes 
const routes:{path:string, component:{render:() => string ,functionality:() => void}}[] = [
  { path: '/', component: HomeComponent },
  { path: '/start-game', component: StartGame },
  { path: '/level-1', component: level1 },
  { path: '/level-2', component: level2 },
  { path: '/level-3', component: level3 },
  { path: '/level-4', component: level4 },
  { path: '/level-5', component: level5 },
  { path: '/level-6', component: level6 },
  { path: '/level-7', component: level7 },
  { path: '/level-8', component: level8 },
  { path: '/level-9', component: level9 },
  { path: '/level-10', component: level10 },

];

const parseLocation = ():string => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path:string, routes:{path:string, component:{render:() => string ,functionality:() => void}}[]) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = ():void => {
    // Find the component based on the current path
    const path = parseLocation();
    // If there's no matching route, get the "Error" component
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    // Render the component in the "app" placeholder
    document.body.innerHTML = component.render();
    component.functionality();
  location.reload();
  };
