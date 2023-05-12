import React, {useEffect} from 'react'
import { showToast } from './utils/showToast'
import { useNavigate } from 'react-router-dom'
const NoPage = () => {
  const navigate = useNavigate();
  
   useEffect(() => {
    navigate('/')
    showToast('error', 'sorry page not available');
   },[navigate])

   return (
   <>
   
   </>
  )
}

export default NoPage
