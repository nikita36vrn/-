
import React, {Component} from 'react';
import Step from "./Stepper";
import FirstStepForm from "./FirstStepForm";
import ThirdStepForm from "./ThirdStepForm";
import axios from "axios";

export default class TestServicePage_2 extends Component {

    state = {
        activeStep: 0,
        numberOfSteps: 2,
        registrations: {}
    };


    changeStepNext = () => {
        let {activeStep, numberOfSteps} = this.state;
        if (activeStep + 1 < numberOfSteps) {
            activeStep++;
            this.setState({activeStep: activeStep})
        }
    };

    changeStepPrev = () => {
        let {activeStep} = this.state;
        if (activeStep - 1 >= 0) {
            activeStep--;
            this.setState({activeStep: activeStep})
        }
    };

    submitForm = () => {
        const {registrations} = this.state;
        let params = {};
        let preparedFields = {};
        Object.keys(registrations).forEach((item) => {
            preparedFields[item] = registrations[item].value
        });

        params.registrations = 1;
        params.fields = preparedFields;
        params.registrations=1;
        axios.post('api/cat_registration/createRegistration', params).then(() => {
            alert("Заявка успешно подана");
            window.location.assign('/')
        }).catch((e)=> {
            alert('Произошла ошибка ' + e );})
    };

    handleChange = (e) => {
        let {registrations} = this.state;
        const result = Object.assign({}, registrations, {
            [e.target.name]: {
                value: e.target.value,
                label: e.target.placeholder || e.target.title
            }
        });
        this.setState({registrations: result});
    };

    render() {
        const {activeStep} = this.state;
        return (
            <div className="">
                <Step activeStepNumber={this.state.activeStep}/>
                {activeStep === 0 ?
                    <FirstStepForm
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        registrations={this.state.registrations}
                    />
                    : null}

                {activeStep === 1 ?
                    <ThirdStepForm
                        submitForm={this.submitForm}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        registrations={this.state.registrations}
                    /> : null}

            </div>
        )
    }
}