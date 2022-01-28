import React, {Component} from 'react';

export default class SecondVForm extends Component {

    render() {
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Выбор специалиста</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>Вакцина</label>
                            <select
                                type="text"
                                name="vacctina"
                                placeholder="Вакцина"
                                onChange={this.props.handleChange}
                                value={fields.vacctina ? fields.vacctina.value : undefined}
                            >
                            <option value="Котоспутник">Котоспутник</option>
                            <option value="Котолайт">Котолайт</option>
                            <option value="Пришелиц_5">Пришелиц_5</option>
                            <option value="Котовац">Котовац</option>
                        </select>
                        </div>
                        <div className="field">
                            <label>Клиника</label>
                            <select
                                type="text"
                                name="Klinika"
                                placeholder="Клиника"
                                onChange={this.props.handleChange}
                                value={fields.Klinika ? fields.Klinika.value : undefined}
                            >
                            <option value="Котовасия">Котовасия ул.ПеревернулВазу 6</option>
                            <option value="СуперКот">СуперКот ул.Мяуразбужувсех 13</option>
                                <option value="Тыгыдык">Тыгыдык ул.Миминишкина 2</option>

                         </select>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Дата приема</label>
                            <input
                                type="date"
                                name="Date_pr"
                                placeholder="Дата приема"
                                onChange={this.props.handleChange}
                                value={fields.Date_pr ? fields.Date_pr.value:undefined }
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
                                <option value="8:00">8:00</option>
                                <option value="9:00">9:00</option>
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