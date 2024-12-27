import React, { useState } from "react";
import { useQuestions } from "../../hooks/useQuestions";
import { useThemeSelected } from "../../store/theme-selected.store";
import logo from '@assets/images/logo.avif';
import './style.css';
import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

const Quiz: React.FC = () => {
  const { themeSelected } = useThemeSelected();
  const { question, getRandomQuestion } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [previousQuestionId, setPreviousQuestionId] = useState<number | null>(null);
  const history = useHistory();
  
  if(!themeSelected) {
    history.push('/');  
  }

  const handleNextQuestion = () => {
    if (currentQuestion?.id) {
      const newQuestion = getRandomQuestion(previousQuestionId || 0);
      setPreviousQuestionId(currentQuestion.id);
      setCurrentQuestion(newQuestion);
    }
  };

  return (
    <div className="container-all">
      <h2 className="title">{themeSelected?.name}</h2>
      <div className="container">
        <img src={logo}></img>
        <div className="question-container">
          <p className="current-question">{currentQuestion.question}</p>
          <IonButton onClick={handleNextQuestion}>Cambiar pregunta</IonButton>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
