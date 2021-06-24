import React, {Component} from 'react';
import axios from "axios";

export default class ThirdStepForm extends Component {
    state = {
        data: ''
    }

    componentDidMount() {
        axios.get('/api//voting/getAddress?id=0').then(({data}) => {
            this.setState({data})
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                <h4 className="ui dividing header">Адрес регистрации</h4>

                <p>Адрес</p>
                <p><strong>{data}</strong></p>

                <button
                    className="ui button primary right floated"
                    onClick={this.props.submitForm}
                >
                    Отправить
                </button>
                <button
                    className="ui icon left labeled button primary left floated"
                    onClick={this.props.changeStepPrev}
                >
                    <i aria-hidden="true" className="left arrow icon"/>Назад
                </button>
            </div>

        )
    }
}
