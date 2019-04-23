## Overview

This is the code for [this](https://www.youtube.com/watch?v=6oM3N6PRFz8&feature=youtu.be) video on Youtube by Siraj Raval called "Watch Me Build a Marketing Startup". This is an app called VectorFunnel. It lets sales & marketing teams upload a CSV file of their lead and get a returned automated lead score for each of them. This helps them save time by allowing them to focus on the leads that are most likely to convert, instead of manually trying all of them. This is a data driven approach to sales and marketing.

## Dependencies

[This](https://github.com/kriasoft/react-firebase-starter) is the boilerplate code I started with. I then added the following dependencies

* Stripe
* CSV reader
* tensorflowjs

## Call for Pull Requests (TODOs)

This code compiles and runs, but its far from finished. Below I've listed some TODOs. I encourage you to make PR for any of them, it would do a great service to everyone who watches the video.

- CSV uploading. you have to click on an invisible button in the bottom left of the /news page to bring up the upload popup. fix it so its integrated/cleaner.
- Data preprocessing. Notice how its using TF dummy data. Fix it so its using the CSV data directly.
- Add more TFJS models to train on
- Have training happen asynchronously
- The settings page is hardcoded as HTML, thats not very react-y. Make it a react native route.
- Create a better data visualization
- Append the CSV with the automated lead scores
- Use the clearbit API to pull more data from the web about a lead, append it to the CSV as new features

## Installation

To install run 'yarn install' , then run 'yarn start' to start the applicaton. More detailed instructions are in the boilerplate repo i've linked to. The dependencies i installed were all react components so yarn install should be all it takes to run.

## Credits

kriasoft on github, everyone who made the react components i've used, all Wizards, i am but a temporary vessel of knowledge

