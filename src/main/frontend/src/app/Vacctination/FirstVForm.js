import React, {Component} from 'react';
import InputMask from 'react-input-mask';

// function validate() {


    // let a = document.forms["name"]["Breed"].value;
    // if ((a == "")|(a==)) {
    //     alert("Укажите ваше имя");
    //     return false;
    // }
// }

// function checkParams() {
//     let name = $('#name').val();
//     let Breed = $('#Breed').val();
//     if (name == null || Breed == null) {
//         $('#nextbutton').attr('disabled', 'disabled')
//     }
//     else {
//         $('#nextbutton').removeAttr('disabled');
//     }
// }



export default class FirstVForm extends Component {
    render() {

        const {fields} = this.props;

        return (
            <div className="ui form">

                <h3 className="ui dividing header" Align="center">Личная информация о котике</h3>
                <div  Align="center">
                    <div className="field">
                        <label>Кличка </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            onChange={this.props.handleChange}
                            value={fields.name ? fields.name.value : undefined}
                            placeholder="Кличка"
                            style={{width: 500}}

                        />

                    </div>
                    <div className="field">
                        <label>Порода</label>
                        <input
                            id="Breed"
                            type="text"
                            name="Breed"
                            placeholder="Порода"
                            onChange={this.props.handleChange}
                            value={fields.Breed ? fields.Breed.value : undefined}
                            style={{width: 500}}

                        />

                    </div>

                    <div className="field" >
                        <label for="age">Возраст</label>
                        <input
                            type="number"
                            name="age"
                            // onKeyDown="return false"
                            placeholder="Возраст"
                            onChange={this.props.handleChange}
                            value={fields.age ? fields.age.value:undefined }
                            style={{width: 500}}
                            max={"25"}
                            min={"1"}
                        />

                    </div>

                    {/*<div className="field" >
                        <label for="sex">Пол</label>
                        <div className="grouped fields radioGroupTop">
                            <div className="field" >
                                <div className="ui radio checkbox" >
                                    <input
                                        type="radio"
                                        name="sex"
                                        tabindex="0"
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
                    </div>*/}


                <div className="field" Align="center">
                    <label>Пол</label>
                    <select

                        type="text"
                        name="sex"
                        placeholder="Пол"
                        onChange={this.props.handleChange}
                        value={fields.sex ? fields.sex.value : undefined}
                        style={{width: 500}}
                    >
                        <option value=""></option>
                        <option value="male">Кот</option>
                        <option value="female">Кошка</option>
                    </select>
                </div>

                    <div Align="center">
                        <button id="nextbutton" className="ui icon right labeled button primary floated" onClick={this.props.changeStepNext} >
                            Далее<i aria-hidden="true" className="right arrow icon"></i>
                        </button>
                    </div>
                </div>




    </div>



        )


    }

}
