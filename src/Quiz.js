import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component{
	render(){
		if(this.state.quiz_position-1 === quizData.quiz_questions.length){
			const isQuizEnd=true;
		}
		else{
			const isQuizEnd=false;
		}
		const isQuizEnd=false;
		return(
			<div>
			{isQuizEnd ? (<QuizEnd/>) : (<QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>)}
			</div>
		);
	}

	constructor(props){
		super(props);
		this.state={quiz_position: 1};
	}

}



export default Quiz;