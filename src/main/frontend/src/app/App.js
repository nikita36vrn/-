import React, {Component} from 'react';
import {hot} from 'react-hot-loader/root'
import "./style.css"
import Header from "./header/header";
import Main from "./main/main";
import Fuater from "./fuater/fuater";
import "semantic-ui-css/semantic.min.css"

class App extends Component {

    render() {
        return (
            <div>
                <Header/> <Main/> <Fuater/>
            </div>
        )
    }
}

export default process.env.NODE_ENV === 'production' ? App : hot(App)