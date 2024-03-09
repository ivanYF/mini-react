// v1
// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";

// const dom = document.createElement("div");
// dom.id = "app";

// document.getElementById("root").append(dom);

// dom.append(textNode);

// v2

import ReactDom from "./core/ReactDom.js";
import { APP } from "./App.js";

ReactDom.createRoot(document.getElementById("root")).render(APP);
