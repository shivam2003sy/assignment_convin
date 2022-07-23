import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
const ProfileCard = (props) => {
  return (
    <>
    <Card sx={{ maxWidth: 600 }}>
    {props.value?(
      <Stack m={1} p={2}>
      <Typography variant ="h4"> Click on the below button to see Profile</Typography>
      </Stack>
    ):(
      <>
    <Stack 
    justifyContent="center"
    alignItems="center"
    m={2}>
      <Avatar
    alt="Remy Sharp"
    src={props.profile.avatar}
    sx={{ width: 100, height: 100 }}
              /></Stack>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.profile.first_name}  {props.profile.last_name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.profile.email}
        </Typography>
      </CardContent>
      </>)}
  </Card>
    </>
  )
}

export default ProfileCard