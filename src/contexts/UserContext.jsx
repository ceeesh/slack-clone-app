import React, { createContext, useState, useEffect } from "react";

export let UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

  const [loginInfo, setLoginInfo] = useState({})
  const [loginInfoHeader, setLoginInfoHeader] = useState({})

  return (
    <UserContext.Provider value={{ loginInfo, setLoginInfo, loginInfoHeader, setLoginInfoHeader}}>
      {children}
    </UserContext.Provider>
  )
}
