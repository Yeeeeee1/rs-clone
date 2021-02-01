import '../../css/home/homePage.scss';
import menu from '../modules/homeMenu.ts'

export const HomeComponent = {
  render: ():string => {
    return `
      <section class='homePage'>
        <ul id="menu"></ul>
        <input id="blur-hack" type="text" style="position: absolute; opacity: 0;">
      </section>
      `;
  },
  functionality: ():void => {
    menu()
  },

};
