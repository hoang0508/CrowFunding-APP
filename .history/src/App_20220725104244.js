import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/campaign" element={<CampaignPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/sign-in" element={<SignInPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;