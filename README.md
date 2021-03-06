<p align='center'>
    <img width='600' height='450'src='https://i.imgur.com/Jhc0ki3.jpg'>	
</p>

## purpose

An event driven platform in which users can search for concerts in a specified city (concert results are for the day of, up until the next day of your search). Users are able to buy tickets and 'share' the event with their friends via a unique url that is generated on the backend. 

[LIVE Demo](http://quickconcert.netlify.com/)


## tech stack
* React via [Create React App](https://github.com/facebookincubator/create-react-app)
* Redux
* Node.js/Express 
* MongoDB/Mongoose

## api
* [Ticketmaster](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* quick concert [server](https://github.com/webbkyr/QuickConcert-Server)

### Long Version

Our API uses a proxy of api/concerts to make the call to Ticketmaster on the server. We append a query string on the front end to the base url for the FETCH request that contains the user's location. So, the server receives the following:

    api/concerts?city=${location}


### TL;DR
Server supports the following: 

* GET concerts via our proxy to Ticketmaster. 
* POST unique, shareable events
* GET the shareable events
* PUT the organizer of the shareable events

TODO: 

* ~~Update attendees of shareable events~~
* [Fix refreshing issue with event urls](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually)
* Functionality to delete attendees

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

Install Node and npm, clone/fork the repo and run the following command in your project folder to install the dependencies
    
    npm install

## acknowledgements
Special shouts to stackoverflow and the open source community.

Happy coding!