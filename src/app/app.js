import React, { Component, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users';


const Pizza = React.lazy(() => import('./containers/Pizza.js'));


export default class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" render={(props) =>  <Suspense fallback={<div>Loading...</div>}><Pizza {...props}/></Suspense>} />
                </div>
            </div>
        );
    }
}
