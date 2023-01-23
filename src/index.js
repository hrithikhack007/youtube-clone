import React from "react";
import reactDom from "react-dom/client";

import App from "./App";
import "./index.css";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App />);
