import React, { Component } from 'react';
import Menu from './components/Menu';
import routes from './routes';
import {Link,  Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {

    showContent = (routes) => {
        var result = null;
        if (routes.length) {
            result = routes.map((item, index) => {
                return <Route key={index} path={item.path} component={item.main} exact={item.exact}/>
            })
        }
        return (
            <Switch>
                {result}
            </Switch>

        );
    }

    render() {
        return (
            <Router>
                <div className="">

                    <Menu />

                    <div className="container">
                        {this.showContent(routes)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
