import React, { useEffect, useState } from 'react'
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import UserProfile from '../UserProfile';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import FeedsPage from '../FeedsPage';
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
        <Box width={"100%"}>
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
  const [tabValue, setTabValue] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabValueChange = (event, value) => {
    setTabValue(value)
  }
  return (
   <div>
{isMobile ? 
  <Box 
  sx={{ position: 'fixed', bottom: 0, width: "100%" }}
  //sx={{  }}
  >
    <TabPanel value={tabValue} index={0}>
          Your dashboard
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <UserProfile />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <FeedsPage/>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          Messages
        </TabPanel>
      <BottomNavigation
        showLabels
        value={tabValue}
        onChange={(event, newValue) => {
          setTabValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={< HomeOutlinedIcon />} />
        <BottomNavigationAction label="Profile" icon={< PermIdentityOutlinedIcon />} />
        <BottomNavigationAction label="Feeds" icon={< FeedOutlinedIcon />} />
        <BottomNavigationAction label="Messages" icon={< ChatBubbleOutlineOutlinedIcon />} />
      </BottomNavigation>
    </Box>
: 
   <div className="mt-30">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "600px",
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
          <Tab icon={< ChatBubbleOutlineOutlinedIcon />} label="Messages" {...a11yProps(3)} />

        </Tabs>
        <TabPanel value={tabValue} index={0}>
          Your dashboard
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <UserProfile />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <FeedsPage/>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          Messages
        </TabPanel>

      </Box>
    </div>
}
   </div>
  
  )
}

export default Sidebar