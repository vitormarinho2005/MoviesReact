import { createContext, useState } from "react";
import { loginRequest } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await loginRequest(username, password);
    if (response.success) {
      setUser(response.user);
      return true;
    }
    setUser(null);
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
