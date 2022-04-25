import { createContext, useState } from "react";

let userId = null;

if (localStorage.getItem("userId")) {
  userId = localStorage.getItem("userId");
}

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ctxUserId, setCtxUserId] = useState(userId);

  const loginData = (userId) => {
    localStorage.setItem("userId", userId);
    console.log(userId);
    setCtxUserId(userId);
  };

  const logoutData = () => {
    localStorage.removeItem("userId");
    setCtxUserId(null);
  };

  return (
    <UserContext.Provider value={{ ctxUserId, loginData, logoutData }}>
      {children}
    </UserContext.Provider>
  );
};
