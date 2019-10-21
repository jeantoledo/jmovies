import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import InfoIcon from '@material-ui/icons/Info';
import TabPanel from './TabPanel';
import styles from './styles';
import UpcomingPage from '../pages/UpcomingPage';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const classes = styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.bar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={<NewReleasesIcon />} label="Upcoming" {...a11yProps(0)} />
          <Tab icon={<InfoIcon />} label="About" {...a11yProps(0)} disabled />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabContent}>
        <UpcomingPage />
      </TabPanel>
    </div>
  );
}
