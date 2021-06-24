import React, {Component} from 'react';


const steps = [
    {
        name: 'Паспортные данные',
        description: 'Проверьте корректность паспортных данных',
        icon: 'address card icon'
    },
    {
        name: 'Контактный телефон',
        description: 'Подтвердите контактный телефон',
        icon: 'phone icon'
    },
    {
        name: 'Адрес регистрации',
        description: 'Подтвердите адрес регистрации по месту жительства',
        icon: 'home icon'
    },
];


export default class Stepper extends Component {

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
