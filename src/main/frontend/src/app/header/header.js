import React, {Component} from 'react';
import mainIcon from '../../../public/static/images/icons/cat_slippers.png';
import {Link} from "react-router-dom";


export  default class Header extends Component {

    render() {
        return (

            <header className= "ui container header_padded">
                <img className="ui middle aligned tiny image" src={mainIcon}/>
                <span className="blue_cat">Кот</span><span className="red_cat">услуги</span>
            </header>
        )
    }

}