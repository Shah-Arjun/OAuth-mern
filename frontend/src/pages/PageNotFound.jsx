import React from 'react'
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {
    const navigate = useNavigate()
  return (
    <div style={styles.container}>
      <h3>404 error | Page Not Found</h3>
      <button onClick={() => navigate('/login')}>Go back</button>
    </div>
  )
}


const styles = {
    container:{
        width: '100vw',
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}


export default PageNotFound
