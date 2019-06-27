import React, {Component} from 'react';
import Header from "./header/header";
import ServiceList from "./serviceList/serviceList";
import Footer from "./footer/footer";
import "semantic-ui-css/semantic.min.css"
import "./style.css"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import ServiceForm from "./serviceForm/serviceForm";
import Page404 from "./404/404"
export default class App extends Component {

    render() {
        return(<div className="ui container">
            <Header/>
                <Router>
                  <Switch>
                  <Route path="/" exact component={ServiceList} />
                      <Route path="/1" exact component={ServiceForm} />
                      <Route  component={Page404} />
                  </Switch>
                </Router>


                <Footer/>

        </div>
        )
    }
}
