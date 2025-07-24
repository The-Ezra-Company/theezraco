import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Frontpage from "./pages/frontpage_2.jsx";
import "@fontsource/inter/900.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Frontpage />
  </StrictMode>
);
