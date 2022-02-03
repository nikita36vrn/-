import React, {Component} from 'react';


export default class FirstVForm extends Component {
    render() {

        const {fields} = this.props;

        function validate() {

            if (fields.name) {
                if (fields.name.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.Breed) {
                if (fields.Breed.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.age) {
                if (fields.age.value === "") {
                    return true
                }
            } else {
                return true
            }

            if (fields.sex) {
                if (fields.sex.value === "") {
                    return true
                }
            } else {
                return true
            }

            return false
        }


        return (
            <div className="ui form">

                <h3 className="ui dividing header" Align="center">Личная информация о котике</h3>
                <div Align="center">
                    <div className="field">
                        <label>Кличка </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Кличка"
                            onChange={this.props.handleChange}
                            value={fields.name ? fields.name.value : undefined}
                            style={{width: 500}}
                            autoFocus
                        />

                    </div>
                    <div className="field">
                        <label>Порода</label>
                        <input
                            // id="Breed"
                            type="text"
                            name="Breed"
                            placeholder="Порода"
                            onChange={this.props.handleChange}
                            value={fields.Breed ? fields.Breed.value : undefined}
                            style={{width: 500}}
                        />

                    </div>

                    <div className="field">
                        <label>Возраст</label>
                        <input
                            type="number"
                            name="age"
                            onKeyPress="return false"
                            placeholder="Возраст"
                            onChange={this.props.handleChange}
                            value={fields.age ? fields.age.value : undefined}
                            style={{width: 500}}
                            max={"25"}
                            min={"1"}
                        />

                    </div>

                    <div className="field" Align="center">
                        <label>Пол</label>
                        <select

                            type="text"
                            name="sex"
                            title='Пол'
                            onChange={this.props.handleChange}
                            value={fields.sex ? fields.sex.value : undefined}
                            style={{width: 500}}
                            required
                        >
                            <option value=""></option>

                            {/*<option value="male">Кот</option>*/}
                            {/*<option value="female">Кошка</option>*/}

                            <option value="Кот">Кот</option>
                            <option value="Кошка">Кошка</option>


                        </select>
                    </div>

                    <div Align="center">
                        <button className="ui icon right labeled button primary floated"
                                onClick={this.props.changeStepNext} disabled={validate()}>
                            Далее<i aria-hidden="true" className="right arrow icon"></i>
                        </button>
                    </div>
                </div>
            </div>


        )


    }

}
