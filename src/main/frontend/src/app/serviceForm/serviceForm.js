import React, {Component} from 'react';
import Stepper from "../FirstStep/Stepper";
import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../FirstStep/SecondStep";
import ThirdStep from "../FirstStep/ThirdStep";
import axios from "axios"


state = {
    activeStep: 0,
    numberOfSteps: 3,
    fields: {}
};


componentDidMount()
{
    axios.post('/api/getServiceById',{id:1}).then(({data}) => {
        this.props.changeBreadcrumbLabel(data.content.name)
    })
}



this.changeStepNext = () => {
    let {activeStep, numberOfSteps} = this.state;
    if (activeStep + 1 < numberOfSteps) {
        activeStep++;
        this.setState({activeStep: activeStep})
    }
};

this.changeStepPrev = () => {
    let {activeStep} = this.state;
    if (activeStep - 1 >= 0) {
        activeStep--;
        this.setState({activeStep: activeStep})
    }
};




this.submitForm = () => {
    const {fields} = this.state;
    let params = {};
    let preparedFields = {};
    Object.keys(fields).forEach((item) => {
        preparedFields[item] = fields[item].value
    });
    params.name = 'Название услуги';
    params.fields = preparedFields;
    params.status = "ACCEPTED";
    params.serviceId=1;
    axios.post('api/requisition/createRequisition', params).then(() => {
        alert("Заявка успешно подана");
        window.location.assign('/')
    }).catch((e)=> {
        alert('Произошка ошибка ' + e );})
};

this.handleChange = (e) => {
    let {fields} = this.state;
    const result = Object.assign({}, fields, {
        [e.target.name]: {
            value: e.target.value,
            label: e.target.placeholder || e.target.title
        }
    });
    this.setState({fields: result});
};



export default class ServiceForm extends Component{

    render() {
        const {activeStep} = this.state;
        return (
            <div className="">
                <Stepper activeStepNumber={this.state.activeStep}/>
                {activeStep === 0 ?
                    <FirstStep
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 1 ?
                    <SecondStep
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 2 ?
                    <ThirdStep
                        submitForm={this.submitForm}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    /> : null}

            </div>
        )
    }


}

