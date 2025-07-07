import { createContext, useContext, useEffect, useState } from "react";
import {
  createGoogleOAth2Session,
  getCurrentUser,
  logout as appwriteLogout,
  getGoogleProfilePicture,
} from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      const userData = await getCurrentUser();
      let profilePic = null;

      if (userData) {
        profilePic = await getGoogleProfilePicture();
      }

      setUser({ ...userData, profilePic });
    } catch (err) {
      console.log(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await createGoogleOAth2Session();
    } catch (e) {
      console.log("GoogleLoginFailed", e);
    }
  };

  const logout = async () => {
    try {
      await appwriteLogout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
