/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import HomeSponsors from './HomeSponsors';
import HomeStack from './HomeStack';



const styles = theme => ({
  content: {
    ...theme.mixins.content,
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
  },
  code: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.common.white,
    backgroundColor: '#555',
    fontFamily: '"Roboto Mono"',
    fontWeight: 100,
    fontSize: '0.875rem',
    marginBottom: theme.spacing.unit * 3,
  },
  block: {},
});
//App name - Vector Funnel
//Sign up link (google + facebook)
//Companies signed up
//Description
//data analytics image
//3 Features

function Home({ classes: s }) {
  return (
    <>
      <HomeSponsors />


      <div className={s.content}>
        <Typography className={s.title} variant="h4" gutterBottom>
          Understand your customers
        </Typography>
        <Typography paragraph>
        <center>
          See the full picture from the get-go, so you’re prepared to reach the right people, make great first impressions, and nurture relationships throughout their lifecycle.
      </center>
      <div>
      <img src="https://i.imgur.com/4QLTb3i.png" alt="Italian Trulli" width="800" height="400">

</img>      </div>
        </Typography>
        <Typography className={s.title} variant="h4" gutterBottom>
        </Typography>
        <HomeStack />
      </div>
    </>
  );
}

export default withStyles(styles)(Home);
