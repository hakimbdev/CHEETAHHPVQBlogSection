import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PepperlylBlogs } from "./screens/PepperlylBlogs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PepperlylBlogs />
  </StrictMode>,
);
