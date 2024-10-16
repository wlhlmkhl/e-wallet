import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import AddCardPage from "./pages/AddCardPage.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/addcard" element={<AddCardPage />}></Route>
      </Routes>
    </>
  );
}
