import React, {Component} from 'react';
import Stepper from "./Step";
import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import axios from "axios";

export default class ServiceForm extends Component {

    state = {
        stepNumber: 0,
        numbersOfSteps: 3,
        fields: {}
    };

    nextStep = () => {
        let {stepNumber, numbersOfSteps} = this.state;
        if (stepNumber + 1 < numbersOfSteps) {
            stepNumber++;
            this.setState({stepNumber})
        }
    };

    prevStep = () => {
        let {stepNumber, numbersOfSteps} = this.state;
        if (stepNumber > 0) {
            stepNumber--;
            this.setState({stepNumber})
        }
    };

    handleChange = (e) =>{
        let {fields} = this.state;
        const result = Object.assign({}, fields,
            {
                [e.target.name]: {
                    value: e.target.value,
                    label: e.target.placeholder || e.target.title

                }
            }
            );
        this.setState({fields:result})
        console.log(fields)
    };

    submitForm = () =>{
        const {fields} = this.state
        let params = {};
        let fieldParams = {};
        Object.keys(fields).forEach((item)=>{
            fieldParams[item] = fields[item].value
        });

        params.name='Запись на приём ветеринару';
        params.status='ACCEPTED';
        params.fields=fieldParams;

        axios.post("/api/requisition/createRequisition", params)
    };

    render() {
        return (
            <div>
                <Stepper stepNumber={this.state.stepNumber}/>
                {this.state.stepNumber === 0 ? <FirstStep nextStep={this.nextStep} handleChange={this.handleChange} fields={this.state.fields}/>: null}
                {this.state.stepNumber === 1 ? <SecondStep nextStep={this.nextStep} prevStep={this.prevStep} />: null}
                {this.state.stepNumber === 2 ? <ThirdStep  prevStep={this.prevStep} submitForm={this.submitForm}/>: null}
            </div>
        );
    }
}