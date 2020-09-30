import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import React from 'react'

import 'style.css'
import WatchMenu from 'components/Menu/WatchMenu.js';
import CheckMounting from 'components/CheckMounting.js';


function App(frameReducer) {
   return (
      <div className="app-container" theme="dark">
         {frameReducer.element}
         <WatchMenu />
         <Router>
            <Link to="/new">
               To check mounting phases
            </Link>
               <Switch>
                  <Route path="/new">
                     <CheckMounting />
                  </Route>
               </Switch>
         </Router>
      </div>
   );
}

function mapStateToProps(state) {
   const { frameReducer } = state;
   return frameReducer;
}




export default connect(
   mapStateToProps,
   null,
)(App)