Technologies : 
- React, React-Router


React router testing :

The purpose of this app is to test the package react-router which is useful to create links in React.

It could serve as a starting point to the SocioCode application's home page and team profile pages.

Based on : 
https://auth0.com/blog/react-router-4-practical-tutorial/

Other docs :
https://reacttraining.com/react-router/web/guides/quick-start
https://github.com/reactjs/react-router-tutorial

Using :
- react-router

Steps : 
- npx create-react-app <name of the app>
- npm install --save react-router-dom
- Replace this line in index.js : (else it won't work)
  import registerServiceWorker from './registerServiceWorker';
  by :
  import registerServiceWorker from "react-service-worker";

- npm install react-service-worker -S
- changed pages's name
- changed the home route to : (because it will always render the home page if I don't)
  Route path="/" exact component={Home}/



=================


Data :

The goal is to make the app able to acces data (in a local json file) throught usage of services.

Based on :
https://github.com/drminnaar/react-movie-cards

Using :
- State concept that contain team data
- JSON file with team data inside
- Lifecycle React method (componentDidMount for now)

Steps :
- Create a folder named services
- Inside, create json file with data, and js file (service)
- Write some dummy data in json file (for now)
- Write the class DataService with method to retrieve data from json file 
- Create state in App.js, setState inside componentDidMount() with the service call, 
