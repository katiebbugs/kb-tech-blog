# kb-tech-blog

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A CMS-style blog site, that allows a user to publish tech blog posts, as well as their own thoughts and opinions.

## Table of Contents

* [Installation](#installation)
* [Tech](#tech)

## Instructions

Clone repo, navigate to root folder, then run the following commands in your terminal:

1. Install needed dependencies
`npm install` or `npm i`

2. Start mysql
`mysql -u root -p`

Some macOS users might get the error message "Command not found". If that is the case, add the following line of code to your .bash_profile file (or if you’re using ZSH, add it to your .zshrc file):
`export PATH="${PATH}:/usr/local/mysql/bin/"` 

3. While in mysql
`source db/schema.sql`

4. To exit mysql
`exit` or `quit`

5. Seed db
`npm run seed` or `node seeds/index.js`

6. Run/start server
`npm start` or `node server.js`

## Tech

* [Node](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)