import React, {Component} from 'react';
export default class FirstStepForm extends Component {

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
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" className="hidden" readOnly="" tabIndex="0"/>
                            <label>Не читать, но согласиться с политикой партии и тд и тп</label>
                        </div>
                    </div>
                    <button onClick={this.props.nextStep}  className="ui icon right labeled button primary right floated">Далее
                        <i aria-hidden="true" className="right arrow icon"/>
                    </button>
                </div>
            </div>
        )
    }

}