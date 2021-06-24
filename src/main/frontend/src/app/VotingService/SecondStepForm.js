import React, {Component} from 'react';
import axios from "axios";

export default class SecondStepForm extends Component {

    state = {
        data: ''
    }

    componentDidMount() {
        axios.get('/api//voting/getPhone?id=0').then(({data}) => {
            this.setState({data})
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Контактный телефон</h4>

                    <p>Номер</p>
                    <p><strong>{data}</strong></p>

                    <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                        Подтвердить<i aria-hidden="true" className="right arrow icon"/>
                    </button>
                    <button className="ui icon left labeled button primary left floated" onClick={this.props.changeStepPrev}>
                        <i aria-hidden="true" className="left arrow icon"/>Назад
                    </button>
                </div>
            </div>
        )
    }
}
