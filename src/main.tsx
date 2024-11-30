import { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root") as Container;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
