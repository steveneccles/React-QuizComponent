import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map(function (object, i) {
                            return (<QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={i} button_text={object} />)
                        })}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion