import React, {Component} from 'react';
import Stepper from "../FirstStep/Stepper";

export  default class ServiceForm extends Component{



    render() {
        return(<div>
            <Stepper activeStepNumber={1}/>
        </div>)
    }
}