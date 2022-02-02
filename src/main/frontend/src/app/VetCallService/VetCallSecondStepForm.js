import React, {Component} from 'react';

export default class VetCallSecondStepForm extends Component {

    render() {
        function getDisabled() {
            if (fields.port) {
                if (fields.port.value === "") { return true }
            } else { return true }
            return false
        }
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Информация о вызове</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>Причина вызова</label>
                            <input
                                type="text"
                                name="port"
                                placeholder="ФИО ветеринара"
                                onChange={this.props.handleChange}
                                value={fields.port ? fields.port.value : ""}
                            />
                        </div>

                    </div>

                    <div className="two fields">
                        <div className="field">
                            <label>Дата вызова</label>
                            <input
                                type="date"
                                name="Дата вызова"
                                placeholder="Дата вызова"
                                onChange={this.props.handleChange}
                                value={fields.date ? fields.date.value : ""}
                            />
                        </div>
                        <div className="field">
                            <label>Время приема</label>
                            <select
                                name="time"
                                onChange={this.props.handleChange}
                                title='Время Вызова'
                                value={fields.time ? fields.time.value : ""}
                            >
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                            </select>
                        </div>
                    </div>

                    <button className="ui icon right labeled button primary right floated" disabled={getDisabled()} onClick={this.props.changeStepNext}>
                        Далее<i aria-hidden="true" className="right arrow icon"/>
                    </button>
                    <button className="ui icon left labeled button primary left floated" onClick={this.props.changeStepPrev}>
                        <i aria-hidden="true" className="left arrow icon"/>Назад
                    </button>
                </div>
            </div>
        )
    }
}