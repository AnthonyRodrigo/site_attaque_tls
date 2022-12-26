import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'

//layout 
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';

const App = props => {

  return (
    <div className='app'>
        <Switch> 
          <Route exact path="/" render={() => (
            <HomepageLayout >
              <Homepage/>
            </HomepageLayout>
          )} />
          <Route path="/:" render={() => (
            <HomepageLayout >
              <Homepage/>
            </HomepageLayout>
          )} />
        </Switch>
    </div>
  );
}


export default App;
