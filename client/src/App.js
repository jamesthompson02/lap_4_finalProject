import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import * as Pages from "./pages"; //

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/dashboard" element={<Pages.DashboardPage />} />
        <Route path="/room/:id" element={<Pages.MusicRoomPage />} />
        <Route path="/playlist" element={<Pages.PlaylistPage />} />
      </Route>
      <Route path="/register" element={<Pages.RegisterPage />} />
      <Route path="/logout" element={<Pages.LogoutPage />} />
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  );
}

export default App;
