import React, {Component} from 'react';
import axios from "axios";
import {icons} from "../constants";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
import Link from "react-router-dom/es/Link";

export default class Main extends Component {

    state={
        serviceList:[],
        listServiceFiltered:[]
    };

    search = (val) => {
        const listService = this.state.listService;
        const value = val.value.toLowerCase();
        const filter = listService.filter((item) => {
            return item.name.toLowerCase().includes(value)
        });
        this.setState({listServiceFiltered: filter})
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

        return (
            <div>
                <div style={{paddingBottom: 15, paddingTop: 15}}>
                    <Input
                        placeholder='Поиск...'
                        icon="stop"
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
                                <Link to={'/'+ item.id} className="ui  card" key={item.id}>
                                    <div className="content">
                                        <img
                                            src={icons[item.id]}
                                            className="ui mini right floated image"
                                        />
                                        <div className="header">{item.name}</div>
                                        <div className="meta">{item.categories.map((item) => {
                                            return item.name
                                        }).join(',')}</div>
                                        <div className="description">{item.description} </div>
                                    </div>
                                </Link>
                            )
                        })
                    }</div>
                    : <div>Ничего не найдено</div>}


            </div>
        )


    }
};