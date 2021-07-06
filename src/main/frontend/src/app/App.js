import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import "./style.css"
import CatalogPage from "./Catalog/CatalogPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Page404 from "./Page404/Page404";
import 'semantic-ui-css/semantic.min.css';
import HeaderPage from "./Header/HeaderPage";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import OrdersListPage from "./OrderList/OrderListPage";
import FormPage from "./VetOrder/FormPage";

class App extends Component {

    state ={
        BreadcrumbLabel :  'Каталог услуг'
    };

    changeBreadcrumbLabel = (label) =>{
        this.setState({BreadcrumbLabel: label})
    };

    render() {
        return <div className="ui container">
            <HeaderPage/>
            <div className="ui divider"/>
            <Breadcrumb BreadcrumbLabel={this.state.BreadcrumbLabel}/>
            <div className="ui divider"/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={CatalogPage}/>
                    <Route path="/1" exact render={() => (<FormPage changeBreadcrumbLabel={this.changeBreadcrumbLabel}/>)}/>
                    <Route path="/orders" exact render={() => (<OrdersListPage changeBreadcrumbLabel={this.changeBreadcrumbLabel}/>)}/>
                    <Route component={Page404}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default process.env.NODE_ENV === 'production' ? App : hot(App)