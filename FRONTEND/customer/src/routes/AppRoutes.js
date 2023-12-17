import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProfilePage from "../pages/ProfilePage";
import ClassroomPage from "../pages/ClassroomPage";
import HomePage from "../pages/HomePage";
import AuthContext from "../store/auth-context";
import LoginPage from "../pages/LoginPage";
import Register from "../components/Auth/Register/register";
import ForgetPassword from "../components/Auth/ForgetPassword/forgetPassword";
import JoinClassPage from "../pages/JoinClassPage";


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
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/myclass/:id" element={<ClassroomPage />} />
        <Route path="/myclass/:id/join" element={<JoinClassPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
