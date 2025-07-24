import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Frontpage from "./pages/frontpage.jsx";
import "@fontsource/inter/900.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Frontpage />
  </StrictMode>
);
