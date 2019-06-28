import React, {Component} from 'react';
import image404 from "../../../public/static/images/404.png"
import {Link} from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <Link to='/'>
                <img className="ui centered medium image" src={image404}/>
            </Link>
        )
    }
}