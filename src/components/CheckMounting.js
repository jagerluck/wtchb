import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class CheckMounting extends React.Component {
   constructor() {
      super()
      this.whatWasMounted = null;
   }

   componentWillMount() {
      console.log('component will mount');
   }

   shouldComponentUpdate() {

   }

   componentDidMount() {
      console.log('I did mount')
   }

   componentDidUpdate(prev) {
      console.log('component did mount');
   }

   render() {
      return (
         <>
            <h1>{this.whatWasMounted}</h1>
            <Router>
               <Link to="/">Home</Link>
            </Router>
         </>
      )
   }
}


export default CheckMounting;