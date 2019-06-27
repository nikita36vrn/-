import React, {Component} from 'react';
export default class SecondStepForm extends Component {

    render ()
    {
        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Имя</label>
                        <input placeholder="Имя"/>
                    </div>
                    <div className="field">
                        <label>Фамилия</label>
                        <input placeholder="Фамилия"/>
                    </div>
                    <button onClick={this.props.nextStep}  className="ui icon right labeled button primary right floated">Далее
                        <i aria-hidden="true" className="right arrow icon"/>
                    </button>
                    <button onClick={this.props.prevStep}  className="ui icon left labeled button primary left floated">Назад
                        <i aria-hidden="true" className="left arrow icon"/>
                    </button>
                </div>
            </div>
        )
    }

}