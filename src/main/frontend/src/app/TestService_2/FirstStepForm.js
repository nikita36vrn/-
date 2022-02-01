import React, {Component} from 'react';
import InputMask from 'react-input-mask';

export default class FirstStepForm extends Component {

    render() {

        const {registrations} = this.props;

        return (
            <div className="ui form">
                <h4 className="ui dividing header">Персональная информация</h4>

                <div className="two fields">
                    <div className="field">
                        <label>Кличка</label>
                        <input
                            type="text"
                            name="a_name_cat"
                            placeholder="Кличка"
                            onChange={this.props.handleChange}
                            value={registrations.a_name_cat ? registrations.a_name_cat.value : undefined}
                        />
                    </div>s
                    <div className="field">
                        <label>Название породы</label>
                        <input
                            type="text"
                            name="b_poroda"
                            placeholder="Название породы"
                            onChange={this.props.handleChange}
                            value={registrations.b_poroda ? registrations.b_poroda.value : undefined}
                        />
                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                        <label>Возраст</label>
                        <InputMask
                            mask="*"
                            value={registrations.c_age ? registrations.c_age.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                    type="text"
                                    name="c_age"
                                    placeholder="Возраст"
                                />
                            }
                        </InputMask>
                    </div>

                    <div className="field">
                        <label>Сертификат прививок</label>
                        <div className="inline fields radioGroupTop">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="d_mc"
                                        onChange={this.props.handleChange}
                                        // defaultChecked={true}
                                        placeholder="mc"
                                        value={'yes'}
                                        checked={registrations.d_mc ? registrations.d_mc.value === 'yes' : true }
                                    />
                                    <label>Сертификат есть</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="d_mc"
                                        onChange={this.props.handleChange}
                                        value={'no'}
                                        checked={registrations.d_mc ? registrations.d_mc.value === 'no' : false }
                                        placeholder="Пол"
                                    />
                                    <label>Сертификата нет</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
            </div>
        )
    }
}