import React, {Component} from 'react';

export default class FirstStep extends Component {
    render() {
        return(
            <div className="ui form">
                <div className="field">
                    <label>Имя</label>
                    <input
                        placeholder="Имя"
                        onChange={this.props.handleChange}
                        name='Name'
                        value={this.props.fields.Name ? this.props.fields.Name.value: ''}
                    />
                </div>

                <div className="field">
                    <label>Возраст</label>
                    <input
                        placeholder="Возраст"
                        onChange={this.props.handleChange}
                        name='year'
                        value={this.props.fields.year ? this.props.fields.year.value: ''}
                    />
                </div>

                <div className="field">
                    Пол:
                    <b></b>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input
                            type="checkbox"
                            className="hidden"
                            name="sex"
                            value="male"
                            checked={this.props.fields.sex ? this.props.fields.sex.value === 'male' : true }

                            onChange={this.props.handleChange}
                        />
                        <label>Мужской</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input
                            type="checkbox"
                            className="hidden"
                            name="sex"
                            readOnly=""
                            value="female"
                            checked={this.props.fields.sex ? this.props.fields.sex.value === 'female' : false }
                            onChange={this.props.handleChange}
                        />
                        <label>Женский</label>
                    </div>
                </div>

                <button onClick={this.props.nextStep} className="ui icon right labeled button primary right floated">Далее
                <i aria-hidden="true" className="right arrow icon"/>
                </button>
            </div>
        )
    }
}