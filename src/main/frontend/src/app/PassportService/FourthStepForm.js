import React, {Component} from 'react';

export default class FourthStepForm extends Component {

    render() {
        const {fields} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Выбор даты и времени посещения отделения</h4>

                    <div className="two fields">
                        <div className="field">
                            <label>Дата посещения</label>
                            <input
                                type="date"
                                name="visit_date"
                                placeholder="Дата посещения"
                                onChange={this.props.handleChange}
                                value={fields.visit_date ? fields.visit_date.value : undefined}
                            />
                        </div>
                        <div className="field">
                            <label>Время посещения</label>
                            <select
                                name="visit_time"
                                onChange={this.props.handleChange}
                                title='Время посещения'
                                value={fields.visit_time ? fields.visit_time.value : undefined}
                            >
                                <option value="9:00">9:00</option>
                                <option value="9:30">9:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
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