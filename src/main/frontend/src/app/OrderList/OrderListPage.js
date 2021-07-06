import React, {Component} from 'react';
import axios from "axios";
import {icons} from "../constants";
import {statusCode} from "./constrains"

export default class OrdersListPage extends Component {

    state = {
        orderList: [],
        serviceList: [],
    };

    componentDidMount() {
        axios.all([this.getOrderList(), this.getServiceList()])
        this.props.changeBreadcrumbLabel('Заявки')
    }

    getOrderList=()=>{
        axios.post('/api/requisition/listRequisition').then(({data}) => {
            this.setState({orderList: data.content})
        })
    };

    getServiceList=()=>{
        axios.post('api/listService').then(({data}) => {
            this.setState({serviceList: data.content})
        })
    };

    getStatusColor = (status) => {
        const statusColor = statusCode.find((item) => item.code === status);
        return statusColor ? statusColor.color : ''
    };

    getStatusName = (status) => {
        const statusName = statusCode.find((item) => item.code === status);
        return statusName ? statusName.label : ''
    };

    render() {
        const {orderList, serviceList} = this.state;
        return (
            <div>
                <h4 className="ui dividing header">Список заявок</h4>
                <div className={"ui cards"}>
                    {orderList.map((item) =>{
                        const serviceName = serviceList.find((i)=>i.id === item.serviceId)
                        return <div key={item.id + item.serviceId} className={"ui " + this.getStatusColor(item.status) + " card fluid"}>
                            <div className="content">
                                <div className="ui mini left floated image">
                                    <img alt={"картинка"} src={icons[item.serviceId]}/>
                                </div>
                                <div className="header">{serviceName ? serviceName.name : ''}</div>
                                <div className="meta"><span className="date">Статус: {this.getStatusName(item.status)}</span></div>
                                <div className="description">{JSON.stringify(item.fields)}</div>
                            </div>
                        </div>}
                    )}
                </div>
            </div>
        )
    }
}