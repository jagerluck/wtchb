import React from 'react'
import { connect } from 'react-redux'
import WatchMenu from 'components/Menu/WatchMenu.js'
import PicsDrops from 'components/Nonames/PicsDrops.js';
import 'style.css'



function App(frameReducer) {
   return (
      <div className="app-container" theme="dark">
         {frameReducer.element}
         <WatchMenu />
         <PicsDrops />
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