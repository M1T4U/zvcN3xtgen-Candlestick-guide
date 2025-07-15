import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';

const CorrectIcon = () => (
    <svg className="w-6 h-6 inline-block mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IncorrectIcon = () => (
    <svg className="w-6 h-6 inline-block mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [feedbackForScreenReader, setFeedbackForScreenReader] = useState('');

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer

    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
      setFeedbackForScreenReader('Correct!');
    } else {
      setFeedbackForScreenReader(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}.`);
    }
  };

  const handleNext = () => {
    setFeedbackForScreenReader('');
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResults(false);
    setFeedbackForScreenReader('');
  };
  
  if (showResults) {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    return (
      <div className="text-center bg-teal-950/60 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-300 mb-4">Quiz Complete!</h1>
        <p className="text-xl text-teal-200 mb-2">Your Score:</p>
        <p className="text-6xl font-bold text-white mb-6">{score} / {QUIZ_QUESTIONS.length}</p>
        <p className={`text-3xl font-bold mb-8 ${percentage > 60 ? 'text-green-400' : 'text-red-400'}`}>{percentage}%</p>
        <button
          onClick={handleReset}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-300 mb-2">Quiz Time!</h1>
      <p className="text-teal-300 mb-6">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>

      <div className="bg-teal-950/60 p-6 rounded-lg border border-teal-800/50">
        <h2 className="text-xl text-teal-100 mb-6 min-h-[3em]">{currentQuestion.question}</h2>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option;
            let buttonClass = "w-full text-left p-4 rounded-lg transition-all duration-200 border-2 border-teal-700 hover:border-blue-400 hover:bg-teal-800/50";
            if (isSelected) {
                buttonClass += isCorrect ? " bg-green-500/30 border-green-500" : " bg-red-500/30 border-red-500";
            } else if (selectedAnswer && option === currentQuestion.correctAnswer) {
                buttonClass += " bg-green-500/30 border-green-500";
            }

            return (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={!!selectedAnswer}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>
        
        {selectedAnswer && (
          <div className="mt-6 p-4 rounded-lg bg-teal-900/50">
            <div aria-live="polite" className="sr-only">
                {feedbackForScreenReader}
            </div>
            <p className="font-bold text-lg mb-2 flex items-center">
                {isCorrect ? <CorrectIcon/> : <IncorrectIcon/>}
                {isCorrect ? 'Correct!' : 'Incorrect'}
            </p>
            <p className="text-teal-200">{currentQuestion.explanation}</p>
            <button
              onClick={handleNext}
              className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Show Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;