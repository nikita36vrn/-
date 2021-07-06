import React, {Component} from 'react';

class ThirdStep extends Component {
    render() {
        return (
            <div>
                Third
                <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
                <button className="ui icon left labeled button primary left floated" onClick={this.props.changeStepPrev}>
                    <i aria-hidden="true" className="left arrow icon"></i>Назад
                </button>
            </div>
        );
    }
}

export default ThirdStep;
