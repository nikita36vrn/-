import React, {Component} from 'react';

export default class SecondStepForm extends Component {

    render() {
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Адрес Вашего проживанния</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>Страна</label>
                            <select
                                name="city_owner"
                                onChange={this.props.handleChange}
                                title='Город'
                                value={fields.city_owner ? fields.city_owner.value : undefined}
                            >
                                <option value="Russia">Россия</option>
                                <option value="Belarus">Беларусия</option>
                                <option value="Ukraine">Украина</option>
                                <option value="Kazakhstan">Казахстан</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Город</label>

                            <input
                                type="text"
                                name="city_owner"
                                placeholder="Город"
                                onChange={this.props.handleChange}
                                value={fields.city_owner ? fields.city_owner.value : undefined}
                            />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Домашний адрес</label>
                            <input
                                type="text"
                                name="adr_owner"
                                placeholder="Улица, дом, квартира"
                                onChange={this.props.handleChange}
                                value={fields.adr_owner ? fields.adr_owner.value : undefined}
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