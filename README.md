

<h1 align="center">
    WishList POC
</h1>
<p align="center">
  <img src="https://vejasp.abril.com.br/wp-content/uploads/2021/06/hbomax-divulgacao.jpg.jpg" width="300px">
  <img src="https://mundointerpessoal.com/wp-content/uploads/2018/01/Netflix.jpg.png" align="center" width="300px">

</p>
<h4 align="center"> 
  WishList 🚀 Complete
</h4>

<p align="center">
 <a href="#apiDocs">apiDocs</a> •
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#author">Author</a> • 
</p>

## api documentation
<p>
  POST: /movie </br>
  Body: { "name": "Lagoa Azul", "platform": "Netflix" , gender:"drama" }
</p>
<p>
  GET: /movie?platform=Netflix
</p>
<p>
   DELETE:/movie/:id
</p>
<p>
   PUT:/movie/:id </br>
   Body: {note:"Um filme muito divertido"}
</p>
<p>
   GET:/movie/quantityByPlatform?platform=Netflix
</p>


## About

<p>A POC of typescript. A wishList of movies from different platforms of streaming.</p>

## Features

- [x] Create Films.
- [x] Delete films that has status of view false.
- [x] Get movies by platform via query string.
- [x] Get all movies.
- [x] Update movie status when the user write a note about it.
- [x] Get the total of movies by platform

---
## How it works

This project is a Backend project.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Runnig the backend (server)

```bash
# Clone this repository
$ git clone git@github.com:voller-96/wishList.git
# Access the project folder cmd/terminal
$ cd wishList
# install the dependencies
$ npm install
# Run the application with nodemon
$ npx nodemon app.ts
# The server will start at port: 4000 - go to http://localhost:4000
```
---
## Tech Stack

The following tools were used in the construction of the project:

#### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Joi](https://joi.dev/api/?v=17.7.0)**
-   **[pg](https://node-postgres.com/)**
 -  **[ts-node](https://typestrong.org/ts-node/)**

> See the file  [package.json](https://github.com/voller-96/wishList/blob/main/package.json)
---
## Author
<p>Voller Silas</p>
<a href="mailto:emersonpess011108@gmail.com?"><img src="https://img.shields.io/badge/gmail-%23DD0031.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a>
