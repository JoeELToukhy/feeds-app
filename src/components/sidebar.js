import React, { useEffect, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AlignItemsList from './feeds'
import Details from './details'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
//   appBar: {
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "grey"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  content1: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const [item, setItem] = useState(null);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
          <ListItem button key={"Tweets"}>
            <ListItemText primary={"Tweets"} />
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  const handleClick = (item) => {
      setItem(item);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <AlignItemsList handleClick={handleClick}></AlignItemsList>
      </main>
      <main>
      {/* {item != null ? <AlignItemsList></AlignItemsList> : <div></div> } */}
         <Details></Details>
      </main>
    </div>
  );
}


export default ResponsiveDrawer;
