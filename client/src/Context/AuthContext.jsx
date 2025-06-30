import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getInitialAuthState = () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return false;

      // Decode base64-encoded token payload (for JWT)
      // userToken = JSON.parse(token.token);
      const payload = JSON.parse(atob(token.split(".")[1]));

      return !!payload; // or check expiry here
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
  };

  const getToken = () => {
    try {
      const tokenStr = localStorage.getItem("token");
      return tokenStr ? JSON.parse(tokenStr) : null;
    } catch {
      return null;
    }
  };

  const [isLogin, setIsLogin] = useState(getInitialAuthState);

  const login = (token, navigate) => {
    try {
      localStorage.setItem("token", JSON.stringify(token));
      setIsLogin(true);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setIsLogin(false);
      }
      Swal.fire({
        title: "Logged Out!",
        text: "Your have been logged out.",
        icon: "success",
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        login,
        logout,
        userToken: getToken(),
      }}
    >
      {/* {console.log(payload)} */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
