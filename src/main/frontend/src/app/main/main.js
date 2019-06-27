import React, {Component} from 'react';
import axios from "axios"
import {icons} from "../constants";
import {Input} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Main extends Component {


    state = {
        listService: [],
        listServiceFiltered: []
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

    search = (val) => {
        const listService = this.state.listService;
        const value = val.value.toLowerCase();
        const filter = listService.filter((item) => {
            return item.name.toLowerCase().includes(value)
        });
        this.setState({listServiceFiltered: filter})
    };

    render() {

        return (
                <div>


                    <div style={{paddingBottom: 15, paddingTop: 15}}>
                        <Input
                            placeholder="Поиск..."
                            icon="search"
                            fluid
                            focus
                            onChange={(evt, val) => {
                                this.search(val);
                            }}
                        />
                    </div>


                    {this.state.listServiceFiltered.length ?

                        <div className="ui three cards">{
                            this.state.listServiceFiltered.map((item) => {
                                return (
                                    <Link to={'/' + item.id} className="ui card" key={item.id}>
                                        <div className="content">
                                            <img src={icons[item.id]} className="ui mini right floated image"/>
                                            <div className="header">{item.name}</div>
                                            <div className="meta">{item.categories.map((item) => {
                                                return item.name
                                            }).join(',')}</div>
                                            <div className="description"> {item.description}</div>
                                        </div>
                                    </Link>
                                )
                            })
                        }</div>



                        : <div>Ничего не найдено</div>}
                </div>
        )

    }
}