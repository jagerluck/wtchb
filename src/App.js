import React from 'react'
import { connect } from 'react-redux'
import { WatchMenu } from 'components/Menu/WatchMenu.js'
import 'style.css'



function App(frameReducer) {
   console.log(frameReducer.element)
   return (
      <div className="app-container" theme="dark">
         {frameReducer.element}
         <WatchMenu />
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