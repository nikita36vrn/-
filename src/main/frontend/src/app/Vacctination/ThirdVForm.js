import React, {Component} from 'react';

export default class ThirdVForm extends Component {

    render() {
        const {fields} = this.props;

        return (
            <div Align="center">
                <h3 className="ui dividing header" >Подтверждение заявки</h3>
                <table className="ui celled table"  style={{width:400|400}} >
                    <tbody>

                    {
                        Object.values(fields).map((item) =>
                        <tr Align="center" key={item.label + item.value}>
                            <td>{item.label}</td>
                            <td>{item.value}</td>
                        </tr>
                    )}

                    </tbody>
                </table>

                {/*<button
                    className="ui button primary right floated"
                    onClick={this.props.submitForm}
                >
                    Отправить
                </button>
                <button
                    className="ui icon left labeled button primary left floated"
                    onClick={this.props.changeStepPrev}
                >
                    <i aria-hidden="true" className="left arrow icon"></i>Назад
                </button>*/}
                <div Align="center">

                    <button className="ui icon left labeled button primary floated" onClick={this.props.changeStepPrev}>
                        <i aria-hidden="true" className="left arrow icon"></i>Назад
                    </button>
                    <button className="ui button primary floated" onClick={this.props.submitForm}>Отправить</button>
                </div>

            </div>

        )
    }
}