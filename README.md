# iMenu

[![Build Status](https://travis-ci.org/codeBlock-1984/iMenu.svg?branch=develop)](https://travis-ci.org/codeBlock-1984/iMenu)
[![Coverage Status](https://coveralls.io/repos/github/codeBlock-1984/iMenu/badge.svg?branch=develop)](https://coveralls.io/github/codeBlock-1984/iMenu?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f601f5740aef8244b65/maintainability)](https://codeclimate.com/github/codeBlock-1984/iMenu/maintainability)
 
iMenu is an online application for booking your meals on the go. Sign up is easy and placing an order is hassle free and fast. The UI is appealing and interactive.


## Getting Started

### prerequisites
You will need the following tools to get the project running
 * [NPM](https://www.npmjs.com/)
 * [Node](https://nodejs.org/en/)

### Dependencies
* Express - A Node.js framework
* Body-parser - A middleware for accessing request parameters through the req.body property
* Babel - A Javascript Transpiler for ES6 and above.

### Dev Dependencies
- Nodemon: Node package for automatically restarting the project whenever changes are made
- Morgan: For logging request details in console
- Eslint: Javacript linting package
- Airbnb: Linting style guide
- Mocha: Testing Framework
- Chai and Chai-http: Mocha Assertion libary and plugin
- Coveralls: Used for coverage test

### How to Start the Project on local environment
* git clone  git@github.com:codeBlock-1984/iMenu.git
* git checkout develop
* $ npm install


### User Interface
The UI is hosted on gh-pages
* [iMenu UI](https://codeblock-1984.github.io/iMenu/)

#### Features
- Customer login/signup page
- Orders page: Customer can place an order from the day's menu
- Menu setup page: Caterer can setup menu for the day
- Meal options page: Caterer can create, edit, or delete meal options.
- Records page: Caterer can view all records of orders and transaction details for the day


### API
The API is hosted on Heroku
* [iMenu API](https://imenu-app.herokuapp.com/)

#### Features
The following API Endpoints are available for requests:
- `Create a meal [POST] https://imenu-app.herokuapp.com/api/v1/meals`
- `Get all meals [GET] https://imenu-app.herokuapp.com/api/v1/meals`
- `Get a meal by ID [GET] https://imenu-app.herokuapp.com/api/v1/meals/<mealId>`
- `Modify a meal by ID [PUT] https://imenu-app.herokuapp.com/api/v1/meals/<mealId>`
- `Delete a meal by ID [DELETE] https://imenu-app.herokuapp.com/api/v1/meals/<mealID>`
- `Setup a menu [POST] https://imenu-app.herokuapp.com/api/v1/menus`
- `Get a menu by date [GET] https://imenu-app.herokuapp.com/api/v1/menus/<menuDate>`
- `Get all menus [GET] https://imenu-app.herokuapp.com/api/v1/menus`
- `Get orders by date [GET] https://imenu-app.herokuapp.com/api/v1/orders/<ordersDate>`
- `Place an order [POST] https://imenu-app.herokuapp.com/api/v1/orders`
- `Modify an order by ID [PUT] https://imenu-app.herokuapp.com/api/v1/orders/<orderId>`
- `Delete an order by ID [GET] https://imenu-app.herokuapp.com/api/v1/orders/<orderId>`

### Tests
To run the automated test suite run the command below in your terminal
* npm run test
