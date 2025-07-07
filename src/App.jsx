import "./App.css";
import "@fontsource/inter";
import { Route, Routes } from "react-router";
import { RegistrationPage } from "./components/RegistrationPage";
import { useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./components/HomePage";
import { LandingPage } from "./components/LandingPage";
import { CircularLoader } from "./components/CircularLoader";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  const { loading } = useAuth();

  if (loading) return <CircularLoader />;

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<RegistrationPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
