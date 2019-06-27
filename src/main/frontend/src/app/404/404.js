import React, {Component} from 'react';
import image404 from "../../../public/static/images/404.png"

export default class Page404 extends Component {

    render() {

        return (
            <div>
                <img className="ui centered medium image" src={image404}/>

            </div>

        )
    }
}