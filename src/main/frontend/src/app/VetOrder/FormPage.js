import React, {Component} from 'react';
import Stepper from "./Stepper";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

class FormPage extends Component {

    state = {
        activeStep: 0,
        numberOfSteps: 3,
    }

    changeStepNext = () => {
        let {activeStep, numberOfSteps} = this.state
        if (activeStep + 1 < numberOfSteps) {
            activeStep++
            this.setState({activeStep: activeStep})
        }
    }

    changeStepPrev = () => {
        let {activeStep, numberOfSteps} = this.state
        if (activeStep -1 >= 0) {
            activeStep--
            this.setState({activeStep: activeStep})
        }
    }

    render() {
        const {activeStep} = this.state
        return (
            <div>
                <Stepper activeStep={activeStep}/>

                {activeStep === 0 ? <FirstStep changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev}/> : null}

                {activeStep === 1 ? <SecondStep changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev}/> : null}

                {activeStep === 2 ? <ThirdStep changeStepNext={this.changeStepNext} changeStepPrev={this.changeStepPrev}/> : null}
            </div>
        );
    }
}

export default FormPage;
