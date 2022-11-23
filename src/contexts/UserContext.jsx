import React, { createContext, useState, useEffect } from "react";

export let UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

  const [loginInfo, setLoginInfo] = useState(sessionStorage.getItem("loginInfo") === null ? {} : JSON.parse(sessionStorage.getItem("loginInfo")));
  const [loginInfoHeader, setLoginInfoHeader] = useState(sessionStorage.getItem("loginHeaders") === null ? {} : JSON.parse(sessionStorage.getItem("loginHeaders")));

  const updateLoginInfo = (info) => {
    sessionStorage.setItem('loginInfo', JSON.stringify(info))
    setLoginInfo(info)
  }

  const updateLoginInfoHeader = (info) => {
    sessionStorage.setItem('loginInfo', JSON.stringify(info))
    setLoginInfoHeader(info)
  }

  return (
    <UserContext.Provider value={{ loginInfo, setLoginInfo, loginInfoHeader, setLoginInfoHeader, updateLoginInfo, updateLoginInfoHeader}}>
      {children}
    </UserContext.Provider>
  )
}
