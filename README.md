# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Introduction

Welcome Gastronauts, I present to you the online movie library UI built using React.js

Disclaimer: This was my first ever React application. I have always heard the buzz about React.js but have never actually wet my fingers with it. You can imagine my REACTion when I saw how great it was (my attempt at a react joke).

All jokes &lt;aside>&lt;/aside>.

Building this project was a great learning experience for me I needed to quickly get familiar with React.js, apollo and graphQL. I spent most of my time on researching these technologies.

These are all amazing technologies and graphQL is definately a much quicker and more maintainable approach to developing apps as apposed to REST.

# Libraries, frameworks and tools used

I built this app using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) cli to get my app running with minimal setup.

[react-bootstrap](https://react-bootstrap.github.io/) was my choice for css framework as I have used it in the past and its well known.

There is a date picker component used, [react-datepicker](https://www.npmjs.com/package/react-datepicker)

And a component for rating the movies with stars, [react-rating-stars-component](https://www.npmjs.com/package/react-rating-stars-component). This could of course have been built manually but to save time I simply used a package.

I used [apollo client](https://www.apollographql.com/docs/react/) to make queries to my graphQL endpoint.

# What was built and how

I started off by sketching a small design. I then layed out the HTML and CSS for the structure of the app, very bare bones. My approach was to build it feature by feature, first the front end, then the backend and finally integration. Then move on to the next feature. I started with Authentication and then moved onto the CRUD operations around movies, then sorting movies and then finally the live updates using subscriptions.

This being my first React.js app with apollo and graphQL I had to cut some corners in the app with regards to overall look and feel, adding special features and edge cases and also testing. My goal was to get it to work bug free using the requested tools. Alot of my time went into researching the technologies in order to be able to use them.

Almost all the features have been included as defined in the criteria doc. The app is working although there can be improvements made.

Unfortunately I did not include any testing in this project (yes its terrible). Usually the testing should have been written after (or even before) a feature has been built. The app is small enough that test can still be added without too much effort.

# Areas for improvement

I could probably write a small book under this section, but to keep it simple I will just go over the main issues / areas for improvement.

1. Unit testing, there are currently no tests included in the code.

2. Typescript typing - there are some sections where the any type was used to bypass a typescript error. This is a big no no and defeats the purpose of typescript.

3. Responsiveness of application - the app is usable on other devices but does not have the best user experience. The app responsiveness can also be improved in some areas.

4. Writing to cache after making a movie update - the code to update the cache after inserting or updating a movie can be improved. I believe these issues stem from the graphQL query to get movies

5. Validation - the validation in general is terrible. I optede to use HTML5 validation alongside bootstrap as described in the documentation. This is not working as intended when creating or updating a movie and would be better implemented as live feedback instead of onsubmit.

6. Overall look and feel of the app is very barebones and not the prettiest.

There is plenty more, but this should suffice as an MVP!
