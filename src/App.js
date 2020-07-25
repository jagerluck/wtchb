import React from 'react';
import { WatchMenu } from './components/Menu/WatchMenu.js';
import './watch.css'

// const ThemeContext = React.createContext('light');

export function App() {


   return (
   // to provide theme option for other components
   // TODO do I need to pass watch state or keep it in local state of the component
   // <ThemeContext.Provider value="dark">
      <div className="app-container" theme="dark">
         <div className="app-frames">
            {store}
         </div>
         <WatchMenu />
      </div>
   // </ThemeContext.Provider>
   )
}