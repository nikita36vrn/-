import React, {Component} from 'react';
import Stepper from "./Stepper";

export default class serviceForm extends Component {
    render() {
        return (<div>
            <Stepper activeStepNumber={1}/>
        </div>)
    }
}