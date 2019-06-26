import React, {Component} from 'react';
import axios from "axios";

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
        return (<div className="ui tree cards">

            {this.state.serviceList.map((item) => {

            return <div className="ui card" key={item.id}> {item.name} </div>

        })}</div>)
    }
};