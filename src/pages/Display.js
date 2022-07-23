import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileButton } from '../components/ProfileButton'
import { fetchUser } from '../state/action/action'
import Stack from "@mui/material/Stack"
import ProfileCard from '../components/ProfileCard'
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
export const Display = () => {
  const [profile, setProfile] = useState({})
  const [value, setValue] = useState(true)
  const handelprofile = (id) => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(response => {
        setProfile(response.data.data)
        setValue(false)
      })
  }
  const loading = useSelector(state => state.loading)
  const Users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return (
    <Stack justifyContent="center"
      alignItems="center" spacing={4} m={3} p={3}>
      {(loading)?(<CircularProgress />) : (
        <>
      <ProfileCard profile={profile} value={value} />
      <Stack direction="row" spacing={2} justifyContent="center"
        alignItems="flex-end">
        {Users.map(user => {
          return (
            <Stack key={user.id}><ProfileButton id={user.id} handelprofile={handelprofile} /></Stack>
          )
        })}
      </Stack>
      </>)
      }

      
    </Stack>)
}