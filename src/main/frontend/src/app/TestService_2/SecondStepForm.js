import React, {Component} from 'react';

export default class SecondStepForm extends Component {

    render() {
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Выбор специалиста для сдачи анализов</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>ФИО ветеринара</label>
                            <input
                                type="text"
                                name="doctorName"
                                placeholder="ФИО ветеринара"
                                onChange={this.props.handleChange}
                                value={fields.doctorName ? fields.doctorName.value : undefined}
                            />
                        </div>
                        <div className="field">
                            <label>Время приема</label>
                            <select
                                name="time"
                                onChange={this.props.handleChange}
                                title='Время приема'
                                value={fields.time ? fields.time.value : undefined}
                            >
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                            </select>
                        </div>
                    </div>

                    <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                        Далее <i aria-hidden="true" className="right arrow icon"> </i>
                    </button>
                    <button className="ui icon left labeled button primary left floated" onClick={this.props.changeStepPrev}>
                        <i aria-hidden="true" className="left arrow icon"> </i>Назад
                    </button>
                </div>
            </div>
        )
    }
}