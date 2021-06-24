import React, {Component} from 'react';
import axios from "axios";
import moment from "moment";

export default class FirstStepForm extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        axios.get('/api//voting/getPassportData?id=0').then(({data}) => {
            this.setState({data})
        })
    }

    render() {

        const {data: {name, dateOfBirth, gender, serialNumber, dateOfIssue, issuedBy, code}} = this.state;

        return (
            <div className="ui form">
                <h4 className="ui dividing header">{name}</h4>

                <p>Дата рождения</p>
                <p><strong>{dateOfBirth ? moment(dateOfBirth).format("DD.MM.YYYY") : null}</strong></p>

                <p>Пол</p>
                <p><strong>{gender}</strong></p>



                <h4 className="ui dividing header">Паспорт гражданина РФ</h4>

                <p>Серия и номер</p>
                <p><strong>{serialNumber}</strong></p>

                <p>Дата выдачи</p>
                <p><strong>{dateOfIssue ? moment(dateOfIssue).format("DD.MM.YYYY") : null}</strong></p>

                <p>Кем выдан</p>
                <p><strong>{issuedBy}</strong></p>

                <p>Код подразделения</p>
                <p><strong>{code}</strong></p>

                <button className="ui icon right labeled button primary right floated"
                        onClick={this.props.changeStepNext}>
                    Подтвердить<i aria-hidden="true" className="right arrow icon"/>
                </button>
            </div>
        )
    }
}
