import React, {Component} from 'react';
import StepV from "./StepperV";
import FirstVForm from "./FirstVForm";
import SecondVForm from "./SecondVForm";
import ThirdVForm from "./ThirdVForm";
import axios from "axios";
import icon404 from "../../../public/static/images/404.png";

export default class TestV extends Component {

    state = {
        activeStep: 0,
        numberOfSteps: 3,
        fields: {}
    };

    componentDidMount() {

        axios.post('/api/getServiceById', {id: 0}).then(({data}) => {
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
        params.name = 'Название услуги';
        params.fields = preparedFields;
        params.status = "ACCEPTED";//RequisitionStatus там более подробно
        params.serviceId = 0;
        axios.post('api/requisition/createRequisition', params).then(() => {
            alert("Заявка успешно подана");
            window.location.assign('/')
        }).catch((e) => {
            alert('Произошка ошибка ' + e);
        })
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
                <StepV activeStepNumber={this.state.activeStep}/>
                {activeStep === 0 ?
                    < FirstVForm
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 1 ?
                    <SecondVForm
                        changeStepNext={this.changeStepNext}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    />
                    : null}

                {activeStep === 2 ?
                    <ThirdVForm
                        submitForm={this.submitForm}
                        handleChange={this.handleChange}
                        changeStepPrev={this.changeStepPrev}
                        fields={this.state.fields}
                    /> : null}

            </div>
        )
    }
}