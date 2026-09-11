import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";

import StudentDashboard from "./pages/StudentDashboard";
import StudentSkills from "./pages/StudentSkills";
import StudentLearning from "./pages/StudentLearning";
import Opportunities from "./pages/Opportunities";

import AcademiaDashboard from "./pages/AcademiaDashboard";
import IndustryDashboard from "./pages/IndustryDashboard";

import AIAssistant from "./components/AIAssistant";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* GLOBAL FLOATING AI CAREER ASSISTANT */}
      <AIAssistant />

      <Routes>
        {/* 1. HOME / LANDING PAGE */}
        <Route path="/" element={<Home />} />

        {/* 2. ROLE SELECTION */}
        <Route path="/roles" element={<RoleSelection />} />

        {/* 3. LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* 4. STUDENT SUITE */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/skills" element={<StudentSkills />} />
        <Route path="/student/learning" element={<StudentLearning />} />
        <Route path="/student/opportunities" element={<Opportunities />} />

        {/* 5. ACADEMIA SUITE */}
        <Route path="/academia/dashboard" element={<AcademiaDashboard />} />

        {/* 6. INDUSTRY SUITE */}
        <Route path="/industry/dashboard" element={<IndustryDashboard />} />

        {/* 7. FALLBACK REDIRECT */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;