// import React, { useState } from "react"
import {useGoogleLogin} from '@react-oauth/google'
import { googleAuth } from '../api/api';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate()

  // function that handle onSuccess, onError
  const responseGoogle = async (authResult) => {
    try {
      // if auth code from google cloud
      if(authResult['code']){
        //console.log("auth code==== ", authResult['code'])

        const result = await googleAuth(authResult['code'])   //hit the api passing the code

        console.log("Response from backend: ", result.data.user)
        const {userEmail, userName, image} = result.data.user

        const token = result.data.token
        const userObj = { userEmail, userName, image, token}

        localStorage.setItem('user-info', JSON.stringify(userObj))

        // navigate to dashboard after successful authentication
        navigate('/dashboard')
      }
    } catch (err) {
      console.log("Error while requesting google auth-code", err)
    }
  }


  //google login handling
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'   //auth-code form google cloud server
  })


  return (
    <>
  <div
    className="App"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background: "#000",
    }}
  >
    <button
      onClick={googleLogin}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 22px",
        backgroundColor: "#ffffff",
        color: "#3c4043",
        border: "1px solid #dadce0",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Arial, sans-serif",
        cursor: "pointer",
        boxShadow: "0 1px 2px rgba(60,64,67,0.15)",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(60,64,67,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 2px rgba(60,64,67,0.15)";
      }}
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google"
        style={{
          width: "18px",
          height: "18px",
        }}
      />
      <span>Sign in with Google</span>
    </button>
  </div>
</>
  );
};


export default GoogleLogin;