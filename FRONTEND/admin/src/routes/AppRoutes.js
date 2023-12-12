import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AdminPage from "../pages/AdminPage";
import AuthContext from "../store/auth-context";
import LoginPage from "../pages/LoginPage";
import Register from "../components/Auth/Register/register";
import ForgetPassword from "../components/Auth/ForgetPassword/forgetPassword";

const AppRoutes = () => {
    const authCtx = useContext(AuthContext);

  return (
    <Routes>
      {!authCtx.isLoggedIn && (
        <Route path="/login" element={<LoginPage />} />
      )}
      {!authCtx.isLoggedIn && (
        <Route path="/register" element={<Register />} />
      )}
      {!authCtx.isLoggedIn && (
        <Route path="/forget-password" element={<ForgetPassword />} />
      )}

      <Route element={<Layout />}>
        <Route path="/" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
