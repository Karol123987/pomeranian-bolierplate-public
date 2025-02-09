import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { NotFound } from "./App/Components/NotFound/NotFound";

import { Blocks } from "./App/Blocks";
import { Layout } from "./App/Layout";
import { Dashboard } from "./App/Dashboard";
import { CV } from "./App/CV";
import { Kalendarz } from "./App/Kalendarz";
import { Exercises } from "./App/Exercises";
import { Settings } from "./App/Settings";
import { FAQ } from "./App/FAQ";
import { TechStack } from "./App/Components/TechStack/TechStack";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="dashboard/tech-stack/*" element={<TechStack />} />

          <Route path="cv/*" element={<CV />} />
          <Route path="Kalendarz/*" element={<Kalendarz />} />
          <Route path="Settings/*" element={<Settings />} />
          <Route path="FAQ/*" element={<FAQ />} />

          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
