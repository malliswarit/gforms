import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from "./components/Form/Form";
import ReadOnlyForm from "./components/Form/formReadOnly";
import PieChart from "./components/pieChart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({

  [theme.breakpoints.up('xs')]: {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 300,
      justifyContent: 'center'
    },

  },
  [theme.breakpoints.up('sm')]: {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 450,
      justifyContent: 'center'
    },

  },

  [theme.breakpoints.up('md')]: {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 530,
      justifyContent: 'center'
    },

  },

  [theme.breakpoints.up('lg')]: {
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 1000,
      justifyContent: 'center'
    },

  },
  adjustTabs: {
    display: 'flex',
    justifyContent: 'center !important'
  },
  bgColor: {
    backgroundColor: 'white !important'
  },

  elevation: {
    boxShadow: 'none !important'
  }

}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateIndex = (flag, value) => {
    if (flag === true) {
      setFlag(true)
      setValue(value)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default"
        className={`${classes.bgColor} ${classes.elevation}`}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          classes={{ flexContainer: classes.adjustTabs }}
        >
          <Tab label="Questions" {...a11yProps(0)} />
          <Tab label="Responses" {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >

        <ReadOnlyForm updateIndex={updateIndex} />
        {/* <Form />  */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {flag === true && <PieChart />}
      </TabPanel>

    </div>
  );
}

