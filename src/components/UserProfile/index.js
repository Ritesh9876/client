import React,{useState} from 'react'
import './userProfile.css'
import { Tabs,Tab,Box } from '@mui/material'
import TabPanel from '../../Utils/TabPanel'
import a11yProps from '../../Utils/AllyProps'
import ProfileOverview from './Components/ProfileOverview'
import ProfileEdit from './Components/ProfileEdit'

function UserProfile() {
  const [tabValue,setTabValue]=useState(0)

  const handleTabValueChange= (event,value) =>{
    setTabValue(value)
  }
  return (
    <div className="ml-70 mt-100">
        
        <div>
        <p className="font_24_600">Edit your Connectis profile</p>

        <div className="mt-30">
        <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          width:"100vh"

        }}
      >
        <Tabs
        // orientation="horizantal"
          value={tabValue}
          onChange={handleTabValueChange}
          aria-label="dashboard navigation tabs"
        >
          <Tab  label="Overview"  {...a11yProps(0)} />
          <Tab  label="Edit Profile" {...a11yProps(1)} />

        </Tabs>
        </Box>
       <Box>
       <TabPanel value={tabValue} index={0}>
         <ProfileOverview/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ProfileEdit/>
        </TabPanel>
       

      </Box>
        </div>
        </div>
    </div>
  )
}

export default UserProfile