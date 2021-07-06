import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import "./style.css"
import CatalogPage from "./Catalog/CatalogPage";
import "semantic-ui-css/semantic.min.css"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Page404 from "./Page404/Page404";
import HeaderPage from "./Header/HeaderPage";

class App extends Component {

    render() {
        return <div className='ui container'>

            <HeaderPage/>

            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact component={CatalogPage}/>
                    <Route component={Page404}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default process.env.NODE_ENV === 'production' ? App : hot(App)
