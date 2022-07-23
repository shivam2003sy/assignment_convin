import React from 'react'
import Button  from '@mui/material/Button'
export const ProfileButton = (props) => {
  const handelClick =(id)=>{
    props.handelprofile(id)
  }
  return (
    <>
    <Button variant="outlined" style={{borderColor :"black", color:"black"}} onClick={()=>handelClick(props.id)}>{props.id}</Button>
    </>
  )
}
