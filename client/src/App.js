import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/profile" element={<Pages.ProfilePage />} />
      <Route path="/register" element={<Pages.RegisterPage />} />
      <Route path="/logout" element={<Pages.LogoutPage />} />
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  );
}

export default App;