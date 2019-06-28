import React, {Component} from 'react';
import Stepper from "./Stepper";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import axios from "axios"

export default class ServiceForm extends Component {

    state={
        stepNumber:0,
        numberOfSteps:3,
        fields: {}
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

    handleChange = (e) =>{
        let {fields} = this.state
        const result = Object.assign({},fields,
            {[e.target.name]:
                    {
                        value:e.target.value,
            label:e.target.placeholder

                    }});
        this.setState({fields:result});
        console.log(fields);

    };

    submitForm = ()=>{
        const {fields}=this.state;
        let params ={};
        let fieldParams ={};
Object.keys(fields).forEach((item)=>{
    fieldParams[item]=fields[item].value
})
        params.name='Запись на приём к ветеринару'
        params.status='ACCEPTED'
        params.fields=fieldParams;

        axios.post('/api/requisition/createRequisition', params)

    }


render()
    {

    return (<div>

        <Stepper stepNumber={this.state.stepNumber}/>
        {this.state.stepNumber === 0 ? <FirstStep nextStep={this.nextStep} handleChange={this.handleChange} fields={this.state.fields}/> : null}
        {this.state.stepNumber === 1 ?<SecondStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} fields={this.state.fields}/>:null}
        {this.state.stepNumber === 2 ?<ThirdStep prevStep={this.prevStep} handleChange={this.handleChange} fields={this.state.fields} submitForm={this.submitForm}/>:null}


    </div>)
    }
}