import React from 'react'
import { connect } from 'react-redux'
import { WatchMenu } from './components/Menu/WatchMenu.js'
import './style.css'



function App(props) { 
   return (
      <div className="app-container" theme="dark">
         {props.state}
         <WatchMenu />
      </div>
   )
}



function mapStateToProps(state) {
   console.log(state)
   return { state }
}



export default connect(
   null,
   mapStateToProps
)(App)

// need to wrap the hole container into connect function like so:
// connect(mapState)(Component)
// mapDispatchToProps or this instead of mapState idk 
// probably write as it implemented in example