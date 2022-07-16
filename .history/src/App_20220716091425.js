import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const SignupPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
