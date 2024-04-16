import React from 'react'
import { useParams } from 'react-router-dom'

const MyInfo = () => {
  
  const {id} = useParams()
  
  return (
    <div>MyInfo and My Id = {id}</div>
  )
}

export default MyInfo