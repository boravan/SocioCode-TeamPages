

React router testing :

The purpose of this app is to test the package react-router which is useful to create links in React.

It could serve as a starting point to the SocioCode application's home page and team profile pages.

Based on : 
https://auth0.com/blog/react-router-4-practical-tutorial/

Other docs :
https://reacttraining.com/react-router/web/guides/quick-start
https://github.com/reactjs/react-router-tutorial





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
  <Route path="/" exact component={Home}/>
