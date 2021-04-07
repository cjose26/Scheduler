# Work Day Scheduler

## My Task

This task required me to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. The app needed to run in the browser and feature dynamically updated HTML and CSS powered by jQuery. I also needed to use moment.js.

## How it Works

When the app is loaded you are presented with the following page below.

<img src=".\Assets\imgs\01.PNG">

As you will see on the date in the screenshot, this picture was taken at 12:07 PM. All of the hours that has now passed (in this case hrs 8am - 1am) are now greyed out. The current hour (12hr) has a red background color while all the future hours have a green background color. This helps the user see how much time passed, how much time is left and what hour we are currently.

<img src=".\Assets\imgs\02.PNG">

Once the user inputs a task and hits the save button, the task is saved in the local storage. See screenshot of the local storage below where the task for 12:00 PM is stored.

<img src=".\Assets\imgs\03.PNG">