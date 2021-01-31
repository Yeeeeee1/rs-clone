export const ErrorComponent = {
  render: ():string => {
    return `
        <section>
          <h1>404 Not found</h1>
        </section>
      `;
  },
  functionality: ():void => {
    console.log("error page");
  },
};
