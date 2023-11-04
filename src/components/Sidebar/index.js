import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import UserProfile from '../UserProfile';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FeedsPage from '../FeedsPage';
import Messages from '../Messages'
import TabLabels from '../CommonComponents/TabLabels';
import Notifications from '../Notifications';
import Explore from '../Explore'
import Requests from '../Requests';
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
            <FeedsPage />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
          <Messages/>
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
        <div className="sidebar-tabs-container mt-30">
          
            <Tabs
              className="sidebar-header-tabs-container"
              orientation="vertical"
              value={tabValue}
              onChange={handleTabValueChange}
              aria-label="dashboard navigation tabs"
              indicatorColor='white'
            >
              <Tab icon={< PermIdentityOutlinedIcon />} label={<TabLabels value="Profile"/>} {...a11yProps(0)} />
              <Tab icon={< FeedOutlinedIcon />} label={<TabLabels value="Feeds"/>} {...a11yProps(1)} />
              <Tab icon={< ChatBubbleOutlineOutlinedIcon />} label={<TabLabels value="Messages"/>} {...a11yProps(2)} />
              <Tab icon={< NotificationsNoneOutlinedIcon />} label={<TabLabels value="Notification"/>} {...a11yProps(3)} />
              <Tab icon={< ExploreOutlinedIcon />} label={<TabLabels value="Explore"/>} {...a11yProps(4)} />
              <Tab icon={< LinkOutlinedIcon />} label={<TabLabels value="Requests"/>} {...a11yProps(5)} />
              <Tab icon={< Groups2OutlinedIcon />} label={<TabLabels value="Teams"/>} {...a11yProps(6)} />

            </Tabs>
            
            <TabPanel value={tabValue} index={0}>
              <UserProfile />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <FeedsPage />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Messages/>
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              <Notifications/>
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
              <Explore/>
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
              <Requests/>
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
              Teams
            </TabPanel>

          </div>
      }
    </div>

  )
}

export default Sidebar