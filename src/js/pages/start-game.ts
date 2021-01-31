export const StartGame = {
    render: ():string => {
      return `
        <section>
          <h1>Start game</h1>
          <p>This is just a test</p>
          <a href="#/level-1">Click</a>
        </section>
      `;
    },

    functionality: ():void => {
      console.log("start game page");
    }
  } 