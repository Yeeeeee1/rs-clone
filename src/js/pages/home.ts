export const HomeComponent = {
  render: ():string => {
    return `
        <section>
          <h1>Home</h1>
          <p>This is just a test</p>
          <a href="#/start-game">Click</a>
        </section>
      `;
  },
  functionality: ():void => {
    console.log("home page");
  },
};
