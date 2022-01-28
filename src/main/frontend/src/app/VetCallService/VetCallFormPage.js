import React, {Component} from 'react';
import Step from "./VetCallStepper";
import VetCallFirstStepForm from "./VetCallFirstStepForm";
import VetCallSecondStepForm from "./VetCallSecondStepForm";
import VetCallThirdStepForm from "./VetCallThirdStepForm";
import axios from "axios";

export default class VetCallServicePage extends Component {

    state = {
        activeStep: 0,
        numberOfSteps: 3,
        fields: {}
    };

    componentDidMount() {

        axios.post('/api/getServiceById',{id:6}).then(({data}) => {
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
        let preparedFields = {time : "10:00", sex : "male"};
        Object.keys(fields).forEach((item) => {
            preparedFields[item] = fields[item].value
        });
        params.name = 'Название услуги';
        params.fields = preparedFields;
        params.status = "ACCEPTED";
        params.serviceId=6;
        axios.post('api/requisition/createRequisition', params).then(() => {
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
                    <VetCallFirstStepForm
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 1 ?
                    <VetCallSecondStepForm
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 2 ?
                    <VetCallThirdStepForm
                        submitForm={this.submitForm}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    /> : null}

            </div>
        )
    }
}