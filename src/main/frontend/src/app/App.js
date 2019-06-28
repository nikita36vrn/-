import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import "./style.css"
import Header from "./header/header";
import ServiceList from "./serviceList/serviceList";
import Footer from "./footer/footer";
import {BrowserRouter as Router} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import ServiceForm from "./serviceForm/serviceForm";
import Page404 from "./404/404";
import "semantic-ui-css/semantic.min.css"






class App extends Component {

    render() {
        return (

            <div className={'ui container'}>
                <Header/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ServiceList} />
                        <Route path="/3" exact component={ServiceForm} />
                        <Route component={Page404}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )


    }
}


export default process.env.NODE_ENV === 'production' ? App : hot(App)