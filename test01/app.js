// v1
// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";

// const dom = document.createElement("div");
// dom.id = "app";

// document.getElementById("root").append(dom);

// dom.append(textNode);

// v2
// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

// const dom = document.createElement(el.type);
// dom.id = el.props.id;
// document.getElementById("root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textEl);

function createTextNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === "string" ? createTextNode(child) : child;
      }),
    },
  };
}

// const textEl = createTextNode("app");
// const App = createElement("div", { id: "app" }, textEl);

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.getElementById("root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

function render(el, container) {
  const dom =
    el.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(el.type);

  Object.keys(el.props).forEach(key => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  const children = el.props.children;
  children.forEach(child => {
    render(child, dom);
  });

  container.append(dom);
}

const textEl = createTextNode("app");
// const App = createElement("div", { id: "app" }, "app", "-ivan-test");

// render(App, document.getElementById("root"));

const ReactDom = {
  createRoot(container) {
    return {
      render(App) {
        render(App, container);
      },
    };
  },
};

const App = createElement("div", { id: "app" }, "app", "-ivan-test");
ReactDom.createRoot(document.getElementById("root")).render(App);
