# Leitura Redux Udacity Project

This is the starter template for the final assessment project for Udacity's React and Redux course.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── index.js # This is the root of your app. Contains static HTML right now.
    ├── actions # Actions of the application
    │   ├── ActionsTypes.js # List of type actions
    │   ├── PostActions.js
    │   ├── PostDetailActions.js
    │   └── RootActions.js
    ├── components # Scenes of the application
    │   ├── index.js
    │   ├── Categories.js
    │   ├── Commentary.js
    │   ├── If.js
    │   ├── ListPosts.js
    │   └── MenuNavTop.js
    ├── entities # Entities of the application
    │   ├── index.js
    │   ├── CategoryEntity.js
    │   ├── CommentEntity.js
    │   └── PostEntity.js
    ├── reducers # Reducers of the application
    │   ├── index.js
    │   ├── PostDetailReducer.js
    │   ├── PostReducer.js
    │   └── RootReducer.js
    ├── router # Router of the application
    │   └── index.js
    ├── store # Store(Redux) of the application
    │   └── index.js
    ├── style # Application Styles
    │   ├── index.js
    │   ├── FormPostStyle.js
    │   ├── ListPostsStyle.js
    │   └── MenuNavTopStyle.js
    ├── util 
    │   └── api.js # A JavaScript API for the provided Udacity backend.
    ├── views
    │   ├── comment
    │   │   └── CommentFormView.js    
    │   ├── post
    │   │   ├── PostDetailView.js
    │   │   └── PostFormView.js
    │   └── root
    │       └── RootView.js
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Screen Application

## RootView
![alt text](https://i.imgur.com/3GlEpZ6.png)

## RootView - New Post
![alt text](https://i.imgur.com/XzayMpF.png)

## Detail Post
![alt text](https://i.imgur.com/09VIP2n.png)

## Add New Comment
![alt text](https://i.imgur.com/AeV2e2a.png)


# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Install API Server

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`

## Docs

Information about the API server and how to use it can be found in its [README file](https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md).

## Download Link

[github.com/udacity/reactnd-project-readable-starter](https://github.com/udacity/reactnd-project-readable-starter.git)