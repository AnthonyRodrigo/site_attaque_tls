import React from 'react'
import {Route, Switch} from 'react-router-dom'

//layout 
import HomepageLayout from './layouts/HomepageLayout';

// pages
import Homepage from './pages/Homepage';
import Introduction from './pages/Introduction';
import SSLStriping from './pages/SSLStriping';
import HstsHijacking from './pages/HstsHijacking';
import DetectionMitigation from './pages/DetectionMitigation';
import Bibliographie from './pages/Bibliographie';


const App = props => {
  const ScrollToTopAutomatic = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='app'>
        <Switch> 
          <Route exact path="/" render={() => (
            <HomepageLayout >
              { ScrollToTopAutomatic()}
              <Homepage/>
            </HomepageLayout>
          )} />
          <Route path="/introduction" render={() => (
            <HomepageLayout >
              { ScrollToTopAutomatic()}
              <Introduction/>
            </HomepageLayout>
          )} />
          <Route path="/ssl-striping" render={() => (
            <HomepageLayout >
              { ScrollToTopAutomatic()}
              <SSLStriping/>
            </HomepageLayout>
          )} />
          <Route path="/hsts-hijacking" render={() => (
            <HomepageLayout >
              { ScrollToTopAutomatic()}
              <HstsHijacking/>
            </HomepageLayout>
          )} />
          <Route path="/detection-mitigation" render={() => (
            <HomepageLayout >
              { ScrollToTopAutomatic()}
              <DetectionMitigation/>
            </HomepageLayout>
          )} />
          <Route path="/bibliographie" render={() => (
            <HomepageLayout >
              { ScrollToTopAutomatic()}
              <Bibliographie/>
            </HomepageLayout>
          )} />
        </Switch>
    </div>
  );
}


export default App;
