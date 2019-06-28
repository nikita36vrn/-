import React, {Component} from 'react';


export default class FirstStep extends Component {

    render() {
        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input placeholder="First Name"
                        onChange={this.props.handleChange}
                               name='firstName'
                               value={this.props.fields.firstName ? this.props.fields.firstName.value : ''}
                        />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input placeholder="Last Name"
                               onChange={this.props.handleChange}
                               name='lastName'
                               value={this.props.fields.lastName ? this.props.fields.lastName.value : ''}
                        />
                    </div>
                    <button onClick={this.props.nextStep} className="ui icon right button  labeled primary right floated">Далее
                    <i aria-hidden={true} className="right arrow icon"/>
                    </button>
                </div>
            </div>
        )
    }
}