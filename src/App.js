import React, { useState } from "react";
import Info from "../src/Info";
import LoginSimple from "../src/components/LoginSimple/LoginSimple.js";

// function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }

function useToken(){
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };
    
      const [token, setToken] = useState(getToken());
    
      const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
      };

      return {
        setToken: saveToken,
        token
      }
    }

function App() {

    // const [token, setToken] = useState();
    // const token = getToken();
    const { token, setToken } = useToken();

    if(!token) {
        return <LoginSimple setToken={setToken} />
      }

    return (
        <Info/>
    )
}

export default App
