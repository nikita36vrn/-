{/*import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'
import axios from "axios";

export default class Step1 extends Component {

    state = {
        data: [],
        filtered: []
    };

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.post('api/listCats').then(({data}) => {
            this.setState({data: data.content, filtered: data.content})
        })
    };

    render() {
        const {filtered} = this.state;
        const {fields} = this.props;
        const {service} = this.props;
        return (
            <div className="ui form">
                <div className="field">
                    {/* <label>Имя</label>
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
                </div>*/}
{/* <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
                {filtered.map(filtered =>
                    <div>{filtered.name} {filtered.description} {filtered.sex}
                    </div>)
                }
            </div>*/}

                {/*   <div className="ui form">
                <h4 className="ui dividing header">Персональная информация</h4>

                <div className="two fields">
                    <div className="field">
                        <label>Кличка</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Кличка"
                            onChange={this.props.handleChange}
                            value={fields.name ? fields.name.value : undefined}
                        />
                    </div>
                    <div className="field">
                        <label>Название породы</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Название породы"
                            onChange={this.props.handleChange}
                            value={fields.lastName ? fields.lastName.value : undefined}
                        />
                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                        <label>Возраст</label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Возраст"
                            onChange={this.props.handleChange}
                            value={fields.age ? fields.age.value : undefined}
                        />
                    </div>

                    <div className="field">
                        <label>Пол</label>
                        <div className="inline fields radioGroupTop">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex"
                                        onChange={this.props.handleChange}
                                        // defaultChecked={true}
                                        placeholder="Пол"
                                        value='male'
                                        checked={fields.sex ? fields.sex.value === 'male' : true }
                                    />
                                    <label>Кот</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="sex"
                                        onChange={this.props.handleChange}
                                        value={'female'}
                                        checked={fields.sex ? fields.sex.value === 'female' : false }
                                        placeholder="Пол"
                                    />
                                    <label>Кошка</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="ui dividing header">Информация для связи</h4>
                <div className="two fields">
                    <div className="field">
                        <label>Почта</label>
                        <InputMask
                            mask="*******@****.***"
                            value={fields.email ? fields.email.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Почта"
                                />
                            }
                        </InputMask>
                    </div>
                    <div className="field">
                        <label>Телефон</label>
                        <InputMask
                            mask="+7(999)999 99 99"
                            value={fields.phone ? fields.phone.value : undefined}
                            onChange={this.props.handleChange}>
                            {() =>
                                <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                            />
                            }
                        </InputMask>

                    </div>
                </div>
                <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>*/}
          //  </div>
     //   )
   // }
//}*/
import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'
import axios from "axios";

export default class Step1 extends Component {

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
        const {filtered} = this.state;
        const {fields} = this.props;
        const {service} = this.props;
        return (
           <div className="ui form">
                <center>{filtered.map(filtered =>
                    <div>
                        <h2>{filtered.name}</h2> {filtered.sex}
                        <br />
                        <img src = {filtered.image} alt ="Я кот" width="189" height = "255"/><br />
                        <b>{filtered.description}</b>
                        <br />
                        <br />
                    </div>
                )}</center>
                <button className="ui icon right labeled button primary right floated" onClick={this.props.changeStepNext}>
                    Далее<i aria-hidden="true" className="right arrow icon"></i>
                </button>
            </div>
        )
    }
}