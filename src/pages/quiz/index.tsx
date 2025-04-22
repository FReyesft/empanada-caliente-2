import React, { useEffect, useState } from "react";
import { useQuestions } from "../../hooks/useQuestions";
import { useThemeSelected } from "../../store/theme-selected.store";
import logo from '@assets/images/logo.avif';
import './style.css';
import sprite from '@assets/images/states.png';
import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

const Quiz: React.FC = () => {
  const { themeSelected } = useThemeSelected();
  const { question, getRandomQuestion } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [previousQuestionId, setPreviousQuestionId] = useState<number | null>(null);
  const [timer, setTimer] = useState<number>(0)
  const history = useHistory();

  if (!themeSelected) {
    history.push('/');
  }

  const handleNextQuestion = () => {
    if (currentQuestion?.id) {
      const newQuestion = getRandomQuestion(previousQuestionId || 0);
      setPreviousQuestionId(currentQuestion.id);
      setCurrentQuestion(newQuestion);
    }
  };

  const decrementTimer = (value: number, interval: NodeJS.Timeout): number => {
    if (value === 0) {
      clearInterval(interval)
      return value;
    } else {
      return value - 1;
    }
  }

  const getEmpanadaState = (timer: number): number => {
    if (timer > 40) return 2;
    if (timer > 30) return 2;
    if (timer > 20) return 2;
    if (timer > 10) return 2;
    if (timer > 0) return 2;
    return 3;
  };

  const empanadaState = getEmpanadaState(timer);

  useEffect(() => {
    const initialTime = Math.floor(Math.random() * (40 - 20 + 1)) + 30;
    setTimer(initialTime);

    const interval = setInterval(() => {
      setTimer(prev => decrementTimer(prev, interval));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-all">
      <h2 className="title">{themeSelected?.name}</h2>
      <div className="container">
        <div className={`sprite state-${empanadaState}`}></div>
        <div className="question-container">
          <span>{timer}</span>
          <p className="current-question">{currentQuestion.question}</p>
          <IonButton onClick={handleNextQuestion}>Cambiar pregunta</IonButton>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
