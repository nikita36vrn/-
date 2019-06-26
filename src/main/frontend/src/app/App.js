import React, {Component} from 'react';
import Header from "./header/header";
import Main from "./header/main";
import Footer from "./header/footer";
import "semantic-ui-css/semantic.min.css"

export default class App extends Component {

    render() {
        return(<div>
            <Header/>
            <Main/>
            <Footer/>

        </div>
        )
    }
}
