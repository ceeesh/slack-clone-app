import React, { createContext, useState, useEffect } from "react";

export let UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

  const [loginInfo, setLoginInfo] = useState(!sessionStorage.getItem("loginInfo") ? {} : JSON.parse(sessionStorage.getItem("loginInfo")));
  const [loginInfoHeader, setLoginInfoHeader] = useState(!sessionStorage.getItem("loginHeaders") ? {} : JSON.parse(sessionStorage.getItem("loginHeaders")));
  const [channels, setChannels] = useState('');

  const updateLoginInfo = (info) => {
    sessionStorage.setItem('loginInfo', JSON.stringify(info))
    setLoginInfo(info)
  }

  const updateLoginInfoHeader = (info) => {
    sessionStorage.setItem('loginInfo', JSON.stringify(info))
    setLoginInfoHeader(info)
  }

  return (
    <UserContext.Provider value={{ loginInfo, setLoginInfo, loginInfoHeader, setLoginInfoHeader, updateLoginInfo, updateLoginInfoHeader, channels, setChannels }}>
      {children}
    </UserContext.Provider>
  )
}
