import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Details() {
    const logo = "http://pbs.twimg.com/media/Eo3i3rLWEAMovQr.jpg"
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h2" gutterBottom>
        {this.props.name}
        </Typography>
        <img src={logo} alt="Logo" width="100%" />
        <Typography variant="body2" align="left">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      </Container>
    </React.Fragment>
  );
}
