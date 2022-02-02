import React, {Component} from 'react';


const steps = [
    {
        name: 'Информация о Котике и его Хозяине',
        description: 'Укажите необходимую информацию',
        icon: 'paw icon'
    },
    {
        name: 'Адрес Вашего проживания',
        description: 'Укажите необходимую информацию о необходимую',
        icon: 'home icon'
    },
    {
        name: 'Выбор отделения',
        description: 'Выберете отделение в котором получите документ ',
        icon: 'building outline icon'
    },
    {
        name: 'Выбор даты и времени',
        description: 'Выберете дату и время когда будете получать документ ',
        icon: 'clock outline icon'
    },
    {
        name: 'Выбор способа оплаты ',
        description: 'Выберете спопсоб оплаты государственной пошлины ',
        icon: 'credit card outline icon'
    },
    {
        name: 'Подтверждение заявки',
        description: 'Проверьте кооректность заполнения заявки',
        icon: 'tasks icon'
    },
];


export default class Stepper extends Component {

    render() {
        const {activeStepNumber} = this.props;

        return (
            <div className="ui steps" style={{ display: "inline-block"}}>
                {steps.map((item, i) => {
                        return (
                            <div style={{width:"30%", display: "inline-block" }} key={item.name + i}
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