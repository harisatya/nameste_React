const heading = React.createElement(
  "h1",
  {},
  "Hello Hari you are in react CDN"
);
const heading2 = React.createElement(
  "h2",
  {},
  "Hello Hari you are in heading 2"
);
const container = React.createElement("div", {}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
