import React,{useState} from 'react'
import {Box,Tab,Tabs} from "@mui/material";
import PropTypes from 'prop-types';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import UserProfile from '../UserProfile';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box  width={"100%"}>
          {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

function Sidebar() {
    const [tabValue,setTabValue] = useState(0)

    const handleTabValueChange = (event,value) =>{
        setTabValue(value)
    }
  return (
    <div className="mt-30">
         <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Tabs
        orientation="vertical"
        value={tabValue}
        onChange={handleTabValueChange}
        aria-label="dashboard navigation tabs"
      >
        <Tab icon={< HomeOutlinedIcon />} label="Home"  {...a11yProps(0)} />
        <Tab icon={< PermIdentityOutlinedIcon />} label="Profile" {...a11yProps(1)} />
        <Tab icon={< FeedOutlinedIcon />} label="Feeds" {...a11yProps(2)} />
        <Tab icon={< ChatBubbleOutlineOutlinedIcon  />} label="Messages" {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Your dashboard
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <UserProfile/>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
       Feeds
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Messages
      </TabPanel>
     
    </Box>
    </div>
  )
}

export default Sidebar