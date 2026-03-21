import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import ReferencePage from "./pages/ReferencePage";
import ResourceHubNavbar from "./components/ResourceHubNavbar";
import "./styles/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ResourceHubNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/references" element={<ReferencePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}