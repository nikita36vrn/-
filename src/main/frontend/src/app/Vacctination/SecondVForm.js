import React, {Component} from 'react';


export default class SecondVForm extends Component {


    render() {

        const {fields} = this.props;

        // let now = new Date().toLocaleDateString();

        function validate() {

            if (fields.vacctina) {
                if (fields.vacctina.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.Klinika) {
                if (fields.Klinika.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.Date_pr) {
                if (fields.Date_pr.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.time) {
                if (fields.time.value === "") {
                    return true
                }
            } else {
                return true
            }

            return false
        }


        // function getData() {
        //     const date= new Date();
        //     // alert( now );
        //     return date
        // }


        return (

            <div>
                <div className="ui form" Align="center">
                    <h3 className="ui dividing header">Информация о записи</h3>

                    <div className="field">
                        <label>Вакцина</label>
                        <select
                            type="text"
                            name="vacctina"
                            title="Вакцина"
                            onChange={this.props.handleChange}
                            value={fields.vacctina ? fields.vacctina.value : undefined}
                            style={{width: 500}}
                            autoFocus
                        >
                            <option value=""></option>

                            <option value="Котоспутник">Котоспутник</option>
                            <option value="Котолайт">Котолайт</option>
                            <option value="Пришелиц_5">Пришелиц_5</option>
                            <option value="Котовац">Котовац</option>
                        </select>
                    </div>

                    <div className="field">

                        <label>Клиника</label>
                        <select
                            name="Klinika"
                            title="Клиника"
                            onChange={this.props.handleChange}
                            value={fields.Klinika ? fields.Klinika.value : undefined}
                            style={{width: 500}}
                        >

                            <option value=""></option>
                            <option value="Котовасия">Котовасия ул.ПеревернулВазу 6</option>
                            <option value="СуперКот">СуперКот ул.Мяуразбужувсех 13</option>
                            <option value="Тыгыдык">Тыгыдык ул.Миминишкина 2</option>

                        </select>

                    </div>


                    <div className="field">
                        <label>Дата приема</label>
                        <input
                            type="date"
                            name="Date_pr"
                            placeholder="Дата приема"
                            onChange={this.props.handleChange}
                            value={fields.Date_pr ? fields.Date_pr.value : undefined}
                            style={{width: 500}}
                            min="2022-02-01"
                            // minDate="0"
                            max="2022-03-28"
                        />
                    </div>
                    <div className="field">
                        <label>Время приема</label>
                        <select
                            name="time"
                            title="Время приема"
                            onChange={this.props.handleChange}
                            value={fields.time ? fields.time.value : undefined}
                            style={{width: 500}}
                            required
                        >

                            <option value="проб"></option>
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

                    <div Align="center">

                        <button className="ui icon left labeled button primary floated"
                                onClick={this.props.changeStepPrev}>
                            <i aria-hidden="true" className="left arrow icon"></i>Назад
                        </button>
                        <button className="ui icon right labeled button primary floated"
                                onClick={this.props.changeStepNext} disabled={validate()}>

                            Далее<i aria-hidden="true" className="right arrow icon">
                        </i>

                        </button>


                    </div>
                </div>
            </div>)
    }
}