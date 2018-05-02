import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import routes from './routes';


class App extends Component {

    showContentMenu = (routes) => {
        var result = null;

        if (routes.length) {
            result = routes.map((item, index) => {
                return <Route key={index} path={item.path} exact={item.exact} component={item.main}/>
            })
        }

        return result;
    }

    render() {
        return (    
            <Router>
                <div className="App">
                    
                    <Menu />

                    <Switch>
                        {this.showContentMenu(routes)}
                        
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App;
