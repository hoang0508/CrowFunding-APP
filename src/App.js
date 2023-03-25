import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken } from "utils/auth";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("pages/StartCampaignPage"));

const customStyles = {
  content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user && user?.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      dispatch(authRefreshToken(refresh_token));
    }
  }, [user]);
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/campaign" element={<CampaignPage />}></Route>
          <Route path="/start-campaign" element={<StartCampaignPage />}></Route>
          <Route path="/campaign/:slug" element={<CampaignView />}></Route>
        </Route>
        <Route path="/register" element={<SignUpPage />}></Route>
        <Route path="/login" element={<SignInPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
