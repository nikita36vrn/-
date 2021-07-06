import React, {Component} from 'react';

class FirstStep extends Component {
    render() {
        return (
            <div>
                <button
                    className="ui icon right labeled button primary right floated"
                    onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
            </div>
        );
    }
}

export default FirstStep;
