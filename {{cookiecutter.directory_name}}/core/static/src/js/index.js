import "./../styles/main.scss";

import createComponent from "./component";

let demoComponent = createComponent();
document.body.appendChild(demoComponent);

if (module.hot) {
  module.hot.accept("./component", () => {
    const nextComponent = createComponent();
    document.body.replaceChild(nextComponent, demoComponent);

    demoComponent = nextComponent;
  });
}
