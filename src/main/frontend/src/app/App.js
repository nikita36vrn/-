import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style.css"
import CatalogPage from "./Catalog/СatalogPage";
import Page404 from "./404/404Page";
import TestServicePage from "./TestService/ServicePage";
import 'semantic-ui-css/semantic.min.css'
import mainIcon from '../images/icons/128x128/cat_slippers.png'

class App extends Component {
    render() {
        return (
            <div>
                <header  className="ui container header_padded">
                    <img className="ui middle aligned mini image" src={mainIcon}/>
                    <span className="blue_cat">Кот</span><span className="red_cat">услуги</span>
                </header>
                <div className="ui divider"/>
                <main className="ui container ">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={CatalogPage}/>
                            <Route path="/1" exact component={TestServicePage}/>
                            <Route component={Page404}/>
                        </Switch>
                    </Router>
                </main>
                <div className="ui divider"/>
                <footer className="ui container footer ">
                    footer надо прибить вниз)
                </footer>
            </div>
        )
    }
}

export default process.env.NODE_ENV === 'production' ? App : hot(App)