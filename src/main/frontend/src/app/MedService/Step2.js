import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'
import axios from "axios";

export default class Step2 extends Component {
    state = {
        data: [],
        filtered: []
    };

    componentDidMount() {
        // this.setState({services: listOfServices})
        this.getData()
    }

    getData = () => {
        axios.post('api/listCats').then(({data}) => {
            this.setState({data: data.content, filtered: data.content})
        })
    };
    render() {
        const {fields} = this.props;
        const {service} = this.props;
        return (
            <div>
                <div className="ui form">
                    <h4 className="ui dividing header">Заполнение анкеты</h4>
                    <div className="field">
                        <label>Имя</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Кличка"
                            onChange={this.props.handleChange}
                            value={fields.name ? fields.name.value : undefined}
                        />
                    </div>
                    <div className="field">
                        <label>Фотка</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Фото"
                            onChange={this.props.handleChange}
                            value={fields.photo ? fields.photo.value : undefined}
                        />
                    </div>
                    <div className="field">
                        <label>Описание</label>
                        <input
                            type="text"
                            name="desc"
                            placeholder="Описание"
                            onChange={this.props.handleChange}
                            value={fields.desc ? fields.desc.value : undefined}
                        />
                    </div>
                    <div className="two fields">
                    <div className="field">
                        <label>Пол</label>
                        <div className="inline fields radioGroupTop">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex"
                                        onChange={this.props.handleChange}
                                        placeholder="Пол"
                                        value='кот'
                                        checked={fields.sex ? fields.sex.value === 'кот' : true }
                                    />
                                    <label>Страстный тигр</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex"
                                        onChange={this.props.handleChange}
                                        value={'кошечка'}
                                        checked={fields.sex ? fields.sex.value === 'кошечка' : false }
                                        placeholder="Пол"
                                    />
                                    <label>Ласковая кошечка</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                        Далее<i aria-hidden="true" className="right arrow icon"></i>
                    </button>
                    <button className="ui icon left labeled button primary left floated" onClick={this.props.changeStepPrev}>
                        <i aria-hidden="true" className="left arrow icon"></i>Назад
                    </button>
                </div>
            </div>
        )
    }
}