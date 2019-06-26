import React, {Component} from 'react';
import axios from "axios";



export default class Main extends Component {

    state = {
        serviceList: []
    };


    getServiceList = () => {

        axios.post('/api/listService')
            .then((response) => {
                this.setState({serviceList: response.data.content})
            })
            // console.log(response.data);})//если удачно выпол ,вернется аргумент и пойдет ответ функции
            .catch((error) => {
                console.log(error);// если ошибка ,сработает catch
            });
    };

    componentDidMount() {


        this.getServiceList()
    }//вызов функции

    render() {
            return (<div className="ui cards">
                {this.state.serviceList.map((item) => {
                return ( <div className="ui card" key={item.id}>{item.name}</div>)
                })}</div>)
    }

};

