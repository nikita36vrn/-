import React, {Component} from 'react';
import Step from "./Stepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import axios from "axios";

export default class MedServicePage extends Component {

    state = {
        activeStep: 0,
        numberOfSteps: 3,
        fields: {}
    };

    componentDidMount() {

        axios.post('/api/getServiceById',{id:1}).then(({data}) => {
            this.props.changeBreadcrumbLabel(data.content.name)
        })
    }

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
        const {fields} = this.state;
        let params = {};
        let preparedFields = {};
        Object.keys(fields).forEach((item) => {
            preparedFields[item] = fields[item].value
        });
        params.name = preparedFields.name;
        params.description = preparedFields.desc;
        params.image = preparedFields.photo;
        params.sex = preparedFields.sex;
        params.fields = preparedFields;
        params.status = "ACCEPTED";
        params.serviceId=6;
        axios.post('api/requisition/createCats', params).then(() => {
            alert("Заявка успешно подана");
            window.location.assign('/')
        }).catch((e)=> {
            alert('Произошка ошибка ' + e );})
    };

    handleChange = (e) => {
        let {fields} = this.state;
        const result = Object.assign({}, fields, {
            [e.target.name]: {
                value: e.target.value,
                label: e.target.placeholder || e.target.title
            }
        });
        this.setState({fields: result});
    };

    render() {
        const {activeStep} = this.state;
        return (
            <div className="">
                <Step activeStepNumber={this.state.activeStep}/>
                {activeStep === 0 ?
                    <Step1
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 1 ?
                    <Step2
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 2 ?
                    <Step3
                        submitForm={this.submitForm}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    /> : null}

            </div>
        )
    }
}