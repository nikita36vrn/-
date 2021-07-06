import React, {Component} from "react";
import axios from "axios";
import CatalogCard from "./CatalogCard";
import {Input} from "semantic-ui-react";

class CatalogPage extends Component {

    state = {
        cardList:[],
        filtered:[]
    }
    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.post('api/listService').then(({data})=>{
            this.setState({cardList:data.content, filtered:data.content})
            console.log(data)
        },(error)=>{console.log(error)})
}

    searchService = (val) => {
        const {cardList} = this.state
        const value = val.value.toLowerCase()
        const filter = cardList.filter(item => item.name.toLowerCase().includes(value))
        this.setState({filtered: filter})
}

    render() {
        const {filtered} = this.state
        return (
            <div>
                <div>
                    <Input
                        placeholder='Поиск...'
                        icon='search'
                        fluid
                        onChange={(e,v)=>this.searchService(v)}
                    />
                </div>
                <div>

                </div>
                <div className={"ui three cards"}>
                    {filtered.map((service)=> <CatalogCard service={service} key={service.id}/>)}
                </div>
            </div>
            )
    }
}

export default CatalogPage;