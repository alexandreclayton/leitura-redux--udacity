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
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
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
    ├── util 
    │   └── api.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
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
<blockquote class="imgur-embed-pub" lang="en" data-id="3GlEpZ6"><a href="//imgur.com/3GlEpZ6"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

## RootView - New Post
<blockquote class="imgur-embed-pub" lang="en" data-id="XzayMpF"><a href="//imgur.com/XzayMpF">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

## Detail Post
<blockquote class="imgur-embed-pub" lang="en" data-id="09VIP2n"><a href="//imgur.com/09VIP2n">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
