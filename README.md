# quick concert 
<p align='center'>
  <img width='600' height='400'src='https://imgur.com/a/qeLXO'>
</p>

## purpose

An event driven platform in which users can search for concerts in a specified city of their choosing and create an event to share with their friends. 

[LIVE Demo](http://sad-goldstine-40377d.netlify.com)


## tech stack
* React via [Create React App](https://github.com/facebookincubator/create-react-app)
* Redux
* Node.js/Express 
* MongoDB/Mongoose

## api
* [Ticketmaster] (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* quick concert [server](https://github.com/webbkyr/QuickConcert-Server) 

## client side folder structure

    my-app/
      README.md
      node_modules/
      package.json
      public/
         index.html
         favicon.ico
      src/
         actions/
         components/
         reducers/
         index.js
         store.js
         config.js

## server side folder structure

[Link to the server code](https://github.com/webbkyr/QuickConcert-Server)

    my-server/
      README.md
      node_modules/
      package.json
      index.js
      db-mongoose.js
      config.js
      db/
         models.js
      routers/
         concerts-router.js

## want to contribute?

Install the Node and npm, clone/fork the repo and run the following command in your project folder to install the dependencies
    
    npm install

## acknowledgements
Special shouts to stackoverflow and the open source community

Happy coding!