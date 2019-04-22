import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
  item: {
    textAlign: 'center',
  },
  title: {},
  desc: {
    textAlign: 'left',
  },
});

const links = new Map([
  ['Knex.js', 'https://knexjs.org/'],
  ['GraphQL.js', 'https://github.com/graphql/graphql-js'],
  ['React.js', 'https://reactjs.org/'],
  ['Relay', 'https://facebook.github.io/relay'],
  ['Material UI', 'https://material-ui.com/'],
]);

function ExtLink(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={links.get(props.children)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function HomeStack({ classes: s, ...props }) {
  return (
    
    <Grid className={s.root} container spacing={16}>
      <Grid className={s.item} item xs>
        <Typography className={s.title} variant="h5" gutterBottom>
          Deep Learning Technology
        </Typography>
        <Typography className={s.desc}>
         <center>
          We use an ensemble of the newest deep learning
          techniques to make highly accurate
          predictions about your customers. Know them 
          better than ever before!
          </center>
        </Typography>

      </Grid>

      <Grid className={s.item} item xs>
        <Typography className={s.title} variant="h5" gutterBottom>
          Data Visualizations
        </Typography>
        <Typography className={s.desc}>
        <center>
          Leverage an array of data visualizations to help
          you segment your customers according to their past
          habits. 
          </center>
        </Typography>
      </Grid>
      <Grid className={s.item} item xs>
        <Typography className={s.title} variant="h5" gutterBottom>
          Implict Data from the Web
        </Typography>
        <Typography className={s.desc}>
        <center>
          We gather 100s of data points from across the web about 
          each customer to ensure our models are optimally trained
          </center>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(HomeStack);
