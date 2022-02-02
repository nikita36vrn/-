import React, {Component} from 'react';
import InputMask from 'react-input-mask';


export default class FirstStepForm extends Component {

    render() {

        const {fields} = this.props;


        function check_fl() {

            if (fields.fio_kot) {
                if (fields.fio_kot.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.por_kot) {
                if (fields.por_kot.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.date_kot) {
                if (fields.date_kot.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.fio_rod) {
                if (fields.fio_rod.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.pass_rod) {
                if (fields.pass_rod.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.fio_owner) {
                if (fields.fio_owner.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.phone_owner) {
                if (fields.phone_owner.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.pass_s_owner) {
                if (fields.pass_s_owner.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.pass_n_owner) {
                if (fields.pass_n_owner.value === "") {
                    return true
                }
            } else {
                return true
            }

            return false
        }


        return (
            <div className="ui form">
                <h4 className="ui dividing header">Информация о Котенке</h4>

                <div className="two fields">
                    <div className="field">
                        <label>Кличка</label>
                        <input
                            type="text"
                            name="fio_kot"
                            placeholder="Кличка"
                            onChange={this.props.handleChange}
                            value={fields.fio_kot ? fields.fio_kot.value : undefined}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Порода котика</label>
                        <input
                            type="text"
                            name="por_kot"
                            placeholder="Порода котика"
                            onChange={this.props.handleChange}
                            value={fields.por_kot ? fields.por_kot.value : undefined}
                            required
                        />
                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                        <label>Дата рождения Котика</label>
                        <input
                            type="date"
                            name="date_kot"
                            placeholder="Дата рождения Котика"
                            onChange={this.props.handleChange}
                            value={fields.date_kot ? fields.date_kot.value : undefined}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Пол</label>
                        <div className="inline fields radioGroupTop">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex_kot"
                                        onChange={this.props.handleChange}
                                        // defaultChecked={true}
                                        placeholder="Пол"
                                        value='male'
                                        checked={fields.sex_kot ? fields.sex_kot.value === 'male' : true }
                                        required
                                    />
                                    <label>Кот</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex_kot"
                                        onChange={this.props.handleChange}
                                        value={'female'}
                                        checked={fields.sex_kot ? fields.sex_kot.value === 'female' : false }
                                        placeholder="Пол"
                                        required
                                    />
                                    <label>Кошка</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                        <label>Кличка одного из Родителей</label>
                        <input
                            type="text"
                            name="fio_rod"
                            placeholder="Кличка одного из Родителей"
                            onChange={this.props.handleChange}
                            value={fields.fio_rod ? fields.fio_rod.value : undefined}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Номер паспорта</label>
                        <InputMask
                            mask="999999"
                            value={fields.pass_rod ? fields.pass_rod.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                    type="text"
                                    name="pass_rod"
                                    placeholder="Номер паспорта"
                                    required
                                />
                            }
                        </InputMask>
                    </div>
                </div>

                <h4 className="ui dividing header">Информация о Хозяине Котенка</h4>
                <div className="two fields">
                    <div className="field">
                        <label>ФИО Хозяина</label>
                        <input
                            type="text"
                            name="fio_owner"
                            placeholder="ФИО Хозяина"
                            onChange={this.props.handleChange}
                            value={fields.fio_owner ? fields.fio_owner.value : undefined}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Телефон</label>
                        <InputMask
                            mask="+7(999)999 99 99"
                            value={fields.phone_owner ? fields.phone_owner.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                type="text"
                                name="phone_owner"
                                placeholder="Телефон"
                                required
                            />
                            }
                        </InputMask>

                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                    <label>Серия паспорта</label>
                    <InputMask
                        mask="99 99"
                        value={fields.pass_s_owner ? fields.pass_s_owner.value : undefined}
                        onChange={this.props.handleChange}>
                        {() =>
                            <input
                                type="text"
                                name="pass_s_owner"
                                placeholder="Серия паспорта"
                                required
                            />
                        }
                    </InputMask>
                </div>
                    <div className="field">
                        <label>Номер паспорта</label>
                        <InputMask
                            mask="999999"
                            value={fields.pass_n_owner ? fields.pass_n_owner.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                    type="text"
                                    name="pass_n_owner"
                                    placeholder="Номер паспорта"
                                    required
                                />
                            }
                        </InputMask>
                    </div>
                </div>

                <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext} disabled={check_fl()}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
            </div>
        )
    }
}