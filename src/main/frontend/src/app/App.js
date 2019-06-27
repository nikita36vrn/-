import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import "./style.css"
import Header from "./header/header";
import ServiceList from "./serviceList/serviceList";
import 'semantic-ui-css/semantic.min.css'
import serviceForm from "./serviceForm/serviceForm";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Page404 from "./404/404";

class App extends Component {

    render() {
        return (
            <div className="ui container">
                <Header/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ServiceList} />
                        <Route path="/1" exact component={serviceForm} />
                        <Route component={Page404}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default process.env.NODE_ENV === 'production' ? App : hot(App)