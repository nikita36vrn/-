import React, {Component} from 'react';
import Stepper from "./Stepper";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export default class ServiceForm extends Component {

    state={
        stepNumber:0,
        numberOfSteps:3
};

    nextStep=()=>{
        let {stepNumber, numberOfSteps} = this.state
        if ( stepNumber+1<numberOfSteps)
        {
            stepNumber++;
            this.setState({stepNumber:stepNumber})
        }
    };
    prevStep=()=>{
        let {stepNumber} = this.state
        if ( stepNumber>0)
        {
            stepNumber--;
            this.setState({stepNumber:stepNumber})
        }
    };

render()
    {

    return (<div>

        <Stepper stepNumber={this.state.stepNumber}/>
        {this.state.stepNumber === 0 ? <FirstStep nextStep={this.nextStep}/> : null}
        {this.state.stepNumber === 1 ?<SecondStep nextStep={this.nextStep} prevStep={this.prevStep}/>:null}
        {this.state.stepNumber === 2 ?<ThirdStep nextStep={this.nextStep} prevStep={this.prevStep}/>:null}


    </div>)
    }
}