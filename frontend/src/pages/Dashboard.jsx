import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const data = localStorage.getItem('user-info')
    const userData = JSON.parse(data)
    setUserInfo(userData)
  },[])


  //handle logout
  const handleLogout = () =>{
    localStorage.removeItem('user-info')
    navigate('/login')
  }

  return (
    <>
    <div
      style={{
        minHeight: "100vh",
        width: '100vw',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        gap: "12px"
      }}
    >
      <h1>Welcome {userInfo?.userName}</h1>
      <h3>{userInfo?.userEmail}</h3>

      <img
        src={userInfo?.images}
        alt="user image"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #ddd",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      />

      <button
        onClick={handleLogout}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#ff4d4f",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Logout
      </button>
    </div>
    </>
  )
}


export default Dashboard
