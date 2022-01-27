import React, {Component} from 'react';
import InputMask from 'react-input-mask';

export default class VetCallFirstStepForm extends Component {

    render() {

        const {fields} = this.props;

        return (
            <div className="ui form">
                <h4 className="ui dividing header">Персональная информация</h4>

                <div className="two fields">
                    <div className="field">
                        <label>Имя котика</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя котика"
                            onChange={this.props.handleChange}
                            value={fields.name ? fields.name.value : undefined}
                        />
                    </div>
                    <div className="field">
                        <label>Порода котика</label>
                        <input
                            type="text"
                            name="poroda"
                            placeholder="Порода котика"
                            onChange={this.props.handleChange}
                            value={fields.lastName ? fields.lastName.value : undefined}
                        />
                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                        <label>Адрес проживания котика</label>
                        <input
                            type="text"
                            name="adress"
                            placeholder="Адрес проживания котика"
                            onChange={this.props.handleChange}
                            value={fields.address ? fields.address.value : undefined}
                        />
                    </div>

                    <div className="field">
                        <label>Пол котика</label>
                        <div className="inline fields radioGroupTop">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="gender"
                                        onChange={this.props.handleChange}
                                        // defaultChecked={true}
                                        placeholder="Пол котика"
                                        value='male'
                                        checked={fields.sex ? fields.sex.value === 'male' : true }
                                    />
                                    <label>Кот</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex"
                                        onChange={this.props.handleChange}
                                        value={'female'}
                                        checked={fields.gender ? fields.gender.value === 'female' : false }
                                        placeholder="Пол котика"
                                    />
                                    <label>Кошка</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="ui dividing header">Информация для связи</h4>
                <div className="two fields">
                    <div className="field">
                        <label>Контактный телефон хозяина</label>
                        <InputMask
                            mask="+7(999)999 99 99"
                            value={fields.phone ? fields.phone.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                type="text"
                                name="phone"
                                placeholder="Контактный телефон хозяина"
                            />
                            }
                        </InputMask>

                    </div>
                </div>
                <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
            </div>
        )
    }
}