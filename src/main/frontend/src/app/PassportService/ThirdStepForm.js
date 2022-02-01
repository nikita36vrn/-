import React, {Component} from 'react';
import InputMask from "react-input-mask";

export default class SecondStepForm extends Component {

    render() {

        const {fields} = this.props;

        function check_fl() {

            if (fields.visit_city) {
                if (fields.visit_city.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.visit_otd) {
                if (fields.visit_otd.value === "") {
                    return true
                }
            } else {
                return true
            }

            return false
        }

        function choose_otd() {

            if (fields.visit_city) {
                if (fields.visit_city.value === "Воронеж") {
                    let option1 = 'Шишкова';
                    return option1;
                }
            } else {
                return true
            }

            if (fields.visit_city) {
                if (fields.visit_city.value === "Москва") {
                    alert('К сожалению,город Москва пока недоступен')
                }
            } else {
                return true
            }

            if (fields.visit_city) {
                if (fields.visit_city.value === "Санкт-Петербург") {
                    alert('К сожалению,город Санкт-Петербург пока недоступен')
                }
            } else {
                return true
            }

            return false
        }
        

        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Выбор отделения для получения паспорта</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>Выберите город</label>
                            <select
                                name="visit_city"
                                onChange={this.props.handleChange}
                                title='Выберите город'
                                value={fields.visit_city ? fields.visit_city.value : undefined}
                                onClick={choose_otd()}
                            >
                                <option selected disabled>Выберите город</option>
                                <option value="Воронеж">Воронеж</option>
                                <option value="Москва">Москва</option>
                                <option value="Санкт-Петербург">Санкт-Петербург</option>
                            </select>

                        </div>

                    </div>



                    <div className="two fields">

                        <div className="field">
                            <label>Выберите Отделение</label>
                            <select
                                name="visit_otd"
                                onChange={this.props.handleChange}
                                title='Выберите отделение'
                                value={fields.visit_otd ? fields.visit_otd.value : undefined}
                            >
                                <option selected disabled>Выберите Отделение</option>
                                <option value="Ветеринарная клиника № 3,ул. Ленина д.45,+(951)456-90-90">Ветеринарная клиника № 3,ул. Ленина д.45,+(951)456-90-90</option>
                                <option value="Ветеринарная клиника № 1,ул. Революции д.92,+7(951)456-75-28">Ветеринарная клиника № 1,ул. Революции д.92,+7(951)456-75-28</option>
                                <option value="Ветеринарная клиника № 2,ул. Хользунова д.22,+7(951)321-14-87">Ветеринарная клиника № 2,ул. Хользунова д.22,+7(951)321-14-87</option>
                            </select>
                        </div>
                    </div>

                    <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext} disabled={check_fl()}>
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