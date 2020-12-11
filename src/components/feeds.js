import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));



export default function AlignItemsList({props}) {
  const classes = useStyles();
  const [appState, setAppState] = useState({
    loading: true,
    data: null,
  });
  
  useEffect(() => {
    const apiUrl = 'https://sportscentral.io/api/popular-tweets';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loading: false, data: data.allNews.data });
      });
  }, []);

  const handleClick = (x) => {
    console.log(x)
  }
  return (
      <div>
    {appState.loading ? <div></div> :
        <List className={classes.root}>
        {appState.data.map((item) => 
        <div key={item.id}>
        <ListItem alignItems="flex-start" button onClick={handleClick(item.description)}>
        <ListItemAvatar>
          <Avatar src={item.additional.tweeet.user.profile_image_url} />
        </ListItemAvatar>
        <ListItemText
          primary={item.posted_date}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.additional.tweeet.user.name}
              </Typography>
              <Divider variant="inset" component="li" />
              {item.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
        )}
        </List> }
      </div>
    
  );
}
