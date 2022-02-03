import React, {Component} from 'react';


const stepsV = [
    {
        name: 'Личная информация о котике',
        description: 'Укажите необходимую информацию о котике',
        icon: 'paw icon'
    },
    {
        name: 'Информация о записи',
        description: 'Выберите дату, вакцину и место вакцинации',
        icon: 'hospital icon'
    },
    {
        name: 'Подтверждение заявки',
        description: 'Проверьте кооректность заполнения заявки',
        icon: 'tasks icon'
    },
];


export default class StepperV extends Component {

    render() {
        const {activeStepNumber} = this.props;

        return (
            <div className="ui steps">
                {stepsV.map((item, i) => {
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