import React from 'react';
import GreetingContainer from './components/greeting/greeting_container';
import SessionFormContainer from './components/session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from './util/route_util';

const App = () => (
  <div>
  	<header>
	    <GreetingContainer/>
    </header>

		<AuthRoute path="/login" component={ SessionFormContainer } />
		<AuthRoute path="/signup" component={ SessionFormContainer } />
  </div>
);

export default App;