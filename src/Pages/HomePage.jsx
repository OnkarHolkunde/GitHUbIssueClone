import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate=useNavigate();

    useEffect(()=>{

        navigate("/facebook/react/issues/1");
    })
    console.log("homepage")
    

  return (
    <div>HomePage</div>
  )
}

export default HomePage