// import React, { useState } from "react"
import {useGoogleLogin} from '@react-oauth/google'

const GoogleLogin = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  // function that handle onSuccess, onError
  const responseGoogle = (authResult) => {
    try {
      // if auth code from google cloud
      if(authResult['code']){
        
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
    <div className="App">
      <button onClick={googleLogin}>Login With Google</button>
    </div>
  );
};

// const styles = {
//   container: {
//     width: "100vw",        
//     height: "100vh",         
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f4f8",
//   },
//   card: {
//     width: "100%",            
//     maxWidth: "400px",        
//     padding: "40px 30px",
//     borderRadius: "12px",
//     backgroundColor: "#fff",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   title: {
//     textAlign: "center",
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#1f2937",
//   },
//   input: {
//     padding: "12px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     outline: "none",
//     fontSize: "14px",
//   },
//   button: {
//     marginTop: "10px",
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     backgroundColor: "#4f46e5",
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

export default GoogleLogin;