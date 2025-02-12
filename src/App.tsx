import { Route, Routes } from "react-router-dom";
import DashbaordPage from "@/pages/index";
import PeoplePage from "./pages/people";
import SettingsPage from "@/pages/settings";
import HelpPage from "@/pages/help";
import AddMemberPage from "./pages/people/pages/addMember";

function App() {
  return (
    <Routes>
      <Route element={<DashbaordPage />} path="/" />
      <Route element={<PeoplePage />} path="/people" />
      <Route element={<AddMemberPage />} path="/people/add" />
      <Route element={<SettingsPage />} path="/settings" />
      <Route element={<HelpPage />} path="/help" />
    </Routes>
  );
}

export default App;
