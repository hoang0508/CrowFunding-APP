import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
