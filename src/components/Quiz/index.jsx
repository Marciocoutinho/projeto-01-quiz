import { useState } from 'react';
import { QuestionAnswer } from '../QuestionAnswer';

import { Button } from '../Button';

import S from './styles.module.css';

const QUESTIONS = [
    {
        id: 1,
        question: 'Qual é meu nome??',
        answers: ['Marcia', 'Mércia', 'Adele', 'Marcio'],
        correctAnswer: 'Marcio',
    },
    {
        id: 2,
        question: 'Qual é a minha idade?',
        answers: ['25', '27', '33', '35'],
        correctAnswer: '35',
    },
    {
        id: 3,
        question: 'O que eu sou?',
        answers: ['Professor', 'Mecânico', 'Advogado', 'Médico'],
        correctAnswer: 'Professor',
    },
    {
        id: 4,
        question: 'Quem é Lúcia?',
        answers: ['Minha tia', 'Minha mãe', 'Minha sogra', 'Minha irmã'],
        correctAnswer: 'Minha mãe',
    },
]

export function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false)

    const handleAnswerQuestion = (event, question, answer) => {
        if(isCurrentQuestionAnswered) {
            return
        }

        const isCorrectAnswer = question.correctAnswer === answer

        const resultClassName = isCorrectAnswer ? S.correct : S.incorrect

        event.currentTarget.classList.toggle(resultClassName)

        if (isCorrectAnswer) {
            setCorrectAnswersCount(correctAnswersCount + 1)
        }

        setIsCurrentQuestionAnswered(true)
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < QUESTIONS.length) {
            setCurrentQuestionIndex(index => index + 1)
        }

        setIsCurrentQuestionAnswered(false)
    }

    const currentQuestion = QUESTIONS[currentQuestionIndex];

    return (
        <div className={S.container}>
            <div className={S.card}>
            <div className={S.quiz}>
                <header className={S.quizHeader}>
                    <span className={S.questionCount}>PERGUNTA 1/3</span>
                    <p className={S.question}>
                        {currentQuestion.question}
                    </p>
                </header>

                <ul className={S.answers}>
                   {currentQuestion.answers.map(answer => (
                     <li key={answer} className={S.answerItem}>
                        <QuestionAnswer 
                            answer={answer} 
                            question={currentQuestion}
                            handleAnswerQuestion ={handleAnswerQuestion}
                        />
                     </li>
                   ))}                  
                </ul>
                
                {isCurrentQuestionAnswered && (
                    <Button onClick={handleNextQuestion}>Próxima Pergunta</Button>
                )}
                
            </div>
            </div>
        </div>
    )
}