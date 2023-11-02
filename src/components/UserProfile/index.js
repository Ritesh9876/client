import React,{useState} from 'react'
import './userProfile.css'
import { Tabs,Tab,Box } from '@mui/material'
import TabPanel from '../../Utils/TabPanel'
import a11yProps from '../../Utils/AllyProps'
import ProfileOverview from './Components/ProfileOverview'
import ProfileEdit from './Components/ProfileEdit'
import TabLabels from '../CommonComponents/TabLabels'

function UserProfile() {
  const [tabValue,setTabValue]=useState(0)

  const handleTabValueChange= (event,value) =>{
    setTabValue(value)
  }
  return (
    <div className="userProfile-container">
        
      
        <p className="font_24_600">Edit your Connectis profile</p>

        <div className="mt-30">
        <Box
        sx={{
          flexGrow: 1,
          color:"#8094ae",
          display: "flex",
          height:"100%"

        }}
      >
        <Tabs
        // orientation="horizantal"
          value={tabValue}
          onChange={handleTabValueChange}
          aria-label="dashboard navigation tabs"
        >
          <Tab  label={<TabLabels value="Overview"/>}  {...a11yProps(0)} />
          <Tab  label={<TabLabels value="Edit Profile"/>} {...a11yProps(1)} />

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
  )
}

export default UserProfile