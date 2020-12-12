import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Details({props}) {
  const [detailState, setDetailState] = useState({
    loading: true,
    data: null,
  });
  // const [tweet, setTweet] = useState(1)

  useEffect(() => {
    const apiUrl = 'https://sportscentral.io/api/popular-tweets';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setDetailState({ loading: false, data: data.allNews.data });
        // setTweet(localStorage.getItem('tweet'))
      });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      {detailState.loading ? <div></div> :
      <Container fixed>
        <Typography variant="h2" gutterBottom>
          {detailState.data[0].additional.tweeet.user.name}
        </Typography>
        <img src={detailState.data[0].additional.media[0].media_url} alt="Logo" width="100%" />
        <Typography variant="body2" align="left">
          {detailState.data[0].additional.tweeet.full_text}
        </Typography>
      </Container>
        }
    </React.Fragment>
  );
}
