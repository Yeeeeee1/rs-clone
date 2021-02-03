import menu from '../modules/homeMenu'

export const StartGame = {
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
    }
  } 