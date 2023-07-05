const header = React.createElement("div", {}, [
  React.createElement("div", {}, "Hello from React"),
  React.createElement("div", {}, "Hello from React1"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);

