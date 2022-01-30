import React, {Component} from 'react';
import InputMask from "react-input-mask";

export default class SecondStepForm extends Component {

    render() {
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Выбор отделения для получения паспорта</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>Выберетите адрес</label>
                            <input
                                type="text"
                                name="doctorName"
                                placeholder="Город отделения"
                                onChange={this.props.handleChange}
                                value={fields.doctorName ? fields.doctorName.value : undefined}
                            />
                        </div>

                    </div>

                    <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                        Далее<i aria-hidden="true" className="right arrow icon"></i>
                    </button>
                    <button className="ui icon left labeled button primary left floated" onClick={this.props.changeStepPrev}>
                        <i aria-hidden="true" className="left arrow icon"></i>Назад
                    </button>
                </div>
            </div>
        )
    }
}