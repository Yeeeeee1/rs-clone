import '../../css/pages/homePage.scss'
import menu from '../modules/startMenu.ts'

export const HomeComponent = {
  render: ():string => {
    return `
        <div class="info-start">
          Элементы управления: A-S-D-W || △-▽-◁-▷ && ENTER
        </div>
        <section class='homePage'>
          <ul id="menu"></ul>
        </section>
        
      `;
  },
  functionality: ():void => {
    menu()
  },
};
