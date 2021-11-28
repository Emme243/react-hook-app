import React, { useState } from "react";
import AppRouter from "./AppRouter";
import Navbar from "./Navbar";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <Navbar />
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
