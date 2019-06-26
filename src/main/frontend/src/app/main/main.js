import React, {Component} from 'react';
import axios from "axios"
import {icons} from "../constants";

export default class Main extends Component {

    state = {
        listService: []
    };


    componentDidMount() {
        this.getServiceList()
    }

    getServiceList = () => {
        axios.post('/api/listService')
            .then((response) => {
                this.setState({listService: response.data.content})
            })
            .catch((error) => {
                console.log(error);
            })
    };

    render() {
        return <div className="ui three cards">{
            this.state.listService.map((item) => {
                return (
                    <div className= "ui  card" key={item.id}>
                    <div className="content">
                        <img
                            src={icons[item.id]}
                            className="ui mini right floated image"
                        />
                        <div className="header">{item.name}</div>
                        <div className="meta">{item.categories.map((item) => {return item.name}).join(',') }</div>
                        <div className="description">{item.description} </div>
                    </div>
                    </div>
                )
            })
        }</div>
    }

}