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
    <div>
      <h1>Welcome {userInfo?.userName}</h1>
      <h3>{userInfo?.userEmail}</h3>
      <img src={userInfo?.image} alt="user image" />

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Dashboard
