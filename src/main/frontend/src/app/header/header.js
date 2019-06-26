import React, {Component} from 'react';
import mainIcon from '../../../public/static/images/icons/cat_slippers.png'

export default class Header extends Component {
    render() {
        return (
            <header className= "ui container header_padded">
                <img className = "ui middle left aligned tiny image" src ={mainIcon}/>
                <span className =" blue">Кото</span><span className = "red">услуги</span>
            </header>
        )
    }
}


