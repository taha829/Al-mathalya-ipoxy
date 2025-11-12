import { createRoot } from "react-dom/client";
import "./i18n"; // initialize i18n (default language: Arabic)
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
