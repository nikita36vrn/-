import React, {Component} from 'react';


const steps = [
    {
        name: 'Информация о котике',
        icon: 'paw icon'
    },
    {
        name: 'Информация о ветеринаре и вызове',
        icon: 'hospital icon'
    },
    {
        name: 'Подтверждение',
        icon: 'tasks icon'
    },
];


export default class VetCallStepper extends Component {

    render() {
        const {activeStepNumber} = this.props;

        return (
            <div className="ui steps">
                {steps.map((item, i) => {
                        return (
                            <div key={item.name + i}
                                 className={i === activeStepNumber ? "active step" : i > activeStepNumber ? "disabled step" : "completed step"}>
                                <i className={item.icon}/>
                                <div className="content">
                                    <div className="title">{item.name}</div>
                                    <div className="description">{item.description}</div>
                                </div>
                            </div>
                        )
                    }
                )
                }
            </div>
        )
    }
}