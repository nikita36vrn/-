import React, {Component} from 'react';

export default class FifthStepForm extends Component {

    render() {
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Выбор способа оплаты государственной пошлины</h4>


                        <div className="field">
                            <label>Выбор Способа оплаты</label>
                            <div className="inline fields radioGroupTop">
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input
                                            type="radio"
                                            name="opl_pass"
                                            onChange={this.props.handleChange}
                                            // defaultChecked={true}
                                            placeholder="Способ оплаты"
                                            value='Безналичные'

                                        />
                                        <label>Безналичный расчет</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input
                                            type="radio"
                                            name="opl_pass"
                                            onChange={this.props.handleChange}
                                            value={'Наличные'}

                                            placeholder="Способ оплаты"
                                        />
                                        <label>Наличный расчет</label>
                                    </div>
                                </div>
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