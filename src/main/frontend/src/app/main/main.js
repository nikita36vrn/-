import React, {Component} from 'react';
import axios from "axios";
import {icons} from "../constants";

export default class Main extends Component {

    state={
        serviceList:[]
    };

    getServiceList = () =>{
        axios.post('/api/listService')
            .then((response)=>{this.setState({serviceList: response.data.content})})
            .catch((e)=>{console.log(e);})
    };

    componentDidMount() {
        this.getServiceList()
    }

    render() {
        return <div className="ui three cards">

            {this.state.serviceList.map((item) => {

            return (
                <div className="ui card" key={item.id}>
                    <div className="content">
                        <img
                            src={icons[item.id]}
                            className="ui mini right floated image"
                        />
                        <div className="header">{item.name}</div>
                        <div className="meta">{item.categories.map((item)=>{return item.name}).join(',') }</div>
                        <div className="description">{item.description}</div>
                    </div>
                </div>
                )
            })
            }</div>
    }
};