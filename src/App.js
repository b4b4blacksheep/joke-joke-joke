import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AppError from "./components/AppError";
import AppHomePage from "./components/AppHomePage";
import AppJokester from "./components/AppJokester";
import AppNavbar from "./components/AppNavbar";
import AppTagalogJokester from "./components/AppTagalogJokester";
import AppTermsOfUse from "./components/AppTermsOfUse";
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<AppHomePage />} />
          <Route path="/english-jokes" element={<AppJokester />} />
          <Route path="/tagalog-jokes" element={<AppTagalogJokester />} />
          <Route path="/terms-of-use" element={<AppTermsOfUse />} />
          <Route path="/*" element={<AppError />} />
        </Routes>
      </Router>
    </>
  );
}