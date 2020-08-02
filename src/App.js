import React from 'react'
import { connect } from 'react-redux'
import { WatchMenu } from './components/Menu/WatchMenu.js'
import './style.css'



function App({state}) {
   return (
      <div className="app-container" theme="dark">
         {state.element}
         <WatchMenu />
      </div>
   )
}



function mapStateToProps(state) {
   return { state }
}



export default connect(
   mapStateToProps,
   null,
)(App)