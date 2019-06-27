import React, {Component} from 'react';
import axios from "axios"
import {icons} from "../constants";
import {Input} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class ServiceList extends Component {


    state = {
        listService: [],
        listServiceFiltered: []
    };

    search = (val) => {
        const listService = this.state.listService;
        const value = val.value.toLowerCase();
        const filter = listService.filter((item) => {
            return item.name.toLowerCase().includes(value)
        })
        this.setState({listServiceFiltered: filter})

    };


    componentDidMount() {
        this.getServiceList()
    }

    getServiceList = () => {
        axios.post('/api/listService')
            .then((response) => {
                this.setState({listService: response.data.content, listServiceFiltered: response.data.content})
            })
            .catch((error) => {
                console.log(error);
            })
    };

    render() {
        return (<div><Input
                focus
                placeholder="Поиск..."
                icon="search"
                fluid
                style={{paddingBottom: 15}}
                onChange={(evt, val) => {
                    this.search(val);
                }}

            />

                <div className="ui three cards">{
                    this.state.listServiceFiltered.map((item) => {
                        return (
                            <Link to={'/' + item.id} className="ui card" key={item.id}>
                                <div className="content">
                                    <img src={icons[item.id]} className="ui mini right floated image"/>
                                    <div className="header">{item.name}</div>
                                    <div className="meta">{item.categories.map((item) =>
                                    {return item.name})
                                        .join(',')}</div>
                                    <div className="description"> {item.description}</div>
                                </div>
                            </Link>
                        )
                    })
                }</div>
            </div>
        )
    }
}
