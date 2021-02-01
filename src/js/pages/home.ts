import '../../css/home/homePage.scss';
import menu from '../modules/homeMenu.ts'

export const HomeComponent = {
  render: ():string => {
    return `
      <section class='homePage'>
        <ul id="menu"></ul>
        <input id="blur-hack" type="text" style="position: absolute; opacity: 0;">

        <p style="display: none">This is just a test</p>
        <a style="display: none" href="#/level-1">Click</a>
      </section>
      `;
  },
  functionality: ():void => {
    menu()
  },

};
