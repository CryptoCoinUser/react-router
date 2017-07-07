require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';


/* Variable Route http://localhost:6060/#/contacts/2 */
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ContactListContainer from './components/contact-list-container';
import App from './components/app';
import ContactContainer from './components/contact-container';
const routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>
    </Router>
);





/* Nested Route  http://localhost:6060/#/contacts
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ContactListContainer from './components/contact-list-container';
import App from './components/app';

const routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
        </Route>
    </Router>
);
*/



/* Simple http://localhost:6060/#/contacts 
import {Router, Route, hashHistory} from 'react-router';
import ContactListContainer from './components/contact-list-container';
const routes = (
  <Router history={hashHistory}>
    <Route path="/contacts" component={ContactListContainer} />
  </Router>
);
*/

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);

