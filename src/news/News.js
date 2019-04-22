/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React, { useState }from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Snakbar from '@material-ui/core/Snackbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { withStyles } from '@material-ui/core/styles';
import { graphql, createFragmentContainer } from 'react-relay';
import {useDropzone} from 'react-dropzone'
import './file-upload.css'
import {Helmet} from 'react-helmet';

import ReactLoading from 'react-loading';


import Link from '../common/Link';
import LikeStoryMutation from './mutations/LikeStory';
import SubmitDialog from './SubmitDialog';

import StripeCheckout from 'react-stripe-checkout';

import CSVReader from "react-csv-reader";

import * as tf from '@tensorflow/tfjs'

//Feedback. Worked/!Worked
//Moving forward
//-i'll be working on an accredited course from scratch
//


const styles = theme => ({
  root: {
    ...theme.mixins.content,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItem: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  listItemText: {
    paddingRight: 0,
    '&& a': {
      color: 'rgba(0, 0, 0, 0.8)',
      textDecoration: 'none',
    },
    '&& > p > a': {
      paddingLeft: '1em',
      textDecoration: 'none',
    },
    '&& a:hover': {
      textDecoration: 'underline',
    },
    '&& > p > a:hover': {
      color: 'rgba(0, 0, 0, 0.8)',
      textDecoration: 'none',
    },
    '&& > p': {
      display: 'flex',
    },
    '&& > p > span:first-child': {
      flexGrow: 1,
    },
    '&& > p svg': {
      width: 18,
      height: 18,
      marginRight: 4,
      verticalAlign: 'bottom',
    },
  },
});




function News({ classes: s, data, ...props }) {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState();
  const { stories } = data;


  function reset() {
    setError(null);
  }

  function like(event) {
    event.preventDefault();
    reset();
    const id = event.currentTarget.id;
    const { environment } = props.relay;
    LikeStoryMutation.commit(environment, { id }).catch(err => {
      if (err.code === 401) {
        props.logIn();
      } else {
        setError(err.message);
      }
    });
  }

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  function stripUndefined (arr) {
  return arr.reduce(function (result, item) {
    result.push( Array.isArray(item) && !item.length ? stripUndefined(item) : item );
    return result;
  }, []);
}


 


  const handleForce = data => {
    //display CSV data as array
    console.log('csv data array')
    console.log(data);
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(data[i]);
        //Do something
    }
    //clean
    var cleaned_data = stripUndefined(data)
    //vectorize
const a = tf.data.array(cleaned_data);
    console.log('tensorflow Dataset object')
console.log(a);
// Generate dummy data.
const data2 = tf.randomNormal([100, 784]);
const labels = tf.randomUniform([100, 10]);

function onBatchEnd(batch, logs) {
  console.log('Accuracy', logs.acc);
}

const model = tf.sequential({
 layers: [
   tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
   tf.layers.dense({units: 10, activation: 'softmax'}),
 ]
});

model.compile({
  optimizer: 'sgd',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

// Train for 5 epochs with batch size of 32.
model.fit(data2, labels, {
   epochs: 5,
   batchSize: 32,
   callbacks: {onBatchEnd}
 }).then(info => {
   console.log('Final accuracy', info.history.acc);
 });


// // Define the model.
   // const model = tf.sequential();
   // model.add(tf.layers.dense({
   //   inputShape: 7,
   //   units: 1
   // }));
   // model.compile({
   //   optimizer: tf.train.sgd(0.000001),
   //   loss: 'meanSquaredError'
   // });

   // // Fit the model using the prepared Dataset
   // return model.fitDataset(flattenedDataset, {
   //   epochs: 10,
   //   callbacks: {
   //     onEpochEnd: async (epoch, logs) => {
   //       console.log(epoch + ':' + logs.loss);
   //     }
   //   }
//    });
    // add clearbit features
    // train classification models 

    //use highest score
    // display 3 visualizations
    // download link button

 //   window.location.href = "about/?data=" + data;
    return false;
};


//https://github.com/briansztamfater/expo-stripe-checkout

  return (
    <div className={s.root}>
 <center>

<img src="https://i.imgur.com/Y0yqX0V.png" width='800' height='270'></img>

<b>Start automatically scoring leads for just 00</b>
<br></br><br></br><br></br>
<StripeCheckout
    stripeKey="pk_test_0bEWhpoWhER4reZqrNIicOol"
    amount={10}
    imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
    storeName="Stripe Checkout"
    description="Test"
    currency="USD"
    nig='lol'
    allowRememberMe={false}
    prepopulatedEmail="test@test.com"
  />



</center>


 

<form>
  

  <br />



  <div className="container">
  
    <CSVReader
      cssClass="file-upload"
      label=""
      inputStyle={{color: 'red'}}
      onFileLoaded={handleForce}
    />

  </div>
<center>
   <Button
          className={s.button}
          color="inherit"
          component={Link}
          href="/settings"
        >
          Submit
        </Button>

  </center>
</form>


      <List>
        {(stories || []).map(x => (
          <ListItem
            className={s.listItem}
            key={x.id}
            style={{ paddingLeft: 0 }}
          >
            <ListItemAvatar>
              <Avatar src={x.author.photoURL} alt={x.author.displayName} />
            </ListItemAvatar>
            <ListItemText
              className={s.listItemText}
              primary={
                x.isURL ? (
                  <a href={x.text}>
                    {x.title}{' '}
                    <OpenInNewIcon
                      style={{ width: 10, height: 10, verticalAlign: 'top' }}
                    />
                  </a>
                ) : (
                  <Link href={`/news/${x.slug}`}>{x.title}</Link>
                )
              }
              secondary={
                <>
                  <span>
                    by{' '}
                    <Link href={`/@${x.author.username}`}>
                      {x.author.displayName}
                    </Link>{' '}
                    | {x.createdAt}
                  </span>
                  <Link href={`/news/${x.slug}`}>
                    <ChatBubbleOutlineIcon /> (0)
                  </Link>
                  <a id={x.id} href={`/news/${x.slug}`} onClick={like}>
                    {x.pointGiven ? <FavoriteIcon /> : <FavoriteBorderIcon />}(
                    {x.pointsCount})
                  </a>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Snakbar open={!!error} message={error} onClose={reset} />
      <SubmitDialog data={data} open={isOpen} onClose={closeDialog} />
    </div>
  );
}



export default withStyles(styles)(
  createFragmentContainer(
    News,
    graphql`
      fragment News on Query {
        ...SubmitDialog
        stories {
          id
          slug
          title
          text
          isURL
          createdAt(format: "MMM Do, YYYY")
          author {
            username
            displayName
            photoURL
          }
          pointsCount
          pointGiven
        }
      }
    `,
  ),
);
