import React, { useEffect, useRef, useState } from "react";
import { useQuestions } from "../../hooks/useQuestions";
import { useThemeSelected } from "../../store/theme-selected.store";
import { useEmpanadaStore } from "../../store/empanada-mode.store";
import { useHistory } from "react-router";
import { IonButton, IonModal } from "@ionic/react";
import tic from '../../assets/sounds/tick-1.mp3';
import gameOver from '../../assets/sounds/game-over.mp3';
import { IonIcon } from "@ionic/react";
import { checkmarkCircle, refreshCircle } from "ionicons/icons";
import './style.css';

const Quiz: React.FC = () => {
  const { themeSelected } = useThemeSelected();
  const { empanadaMode } = useEmpanadaStore();
  const { question, getRandomQuestion } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [previousQuestionId, setPreviousQuestionId] = useState<number | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const history = useHistory();
  const ticSound = useRef<HTMLAudioElement | null>(null);
  const gameOverSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    initTimer();
    return clearTimer;
  }, []);

  useEffect(() => {
    ticSound.current = new Audio(tic);
    gameOverSound.current = new Audio(gameOver);
  }, []);

  useEffect(() => {
    if (!themeSelected) {
      history.push('/');
    }
  }, [themeSelected, history]);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const initTimer = () => {
    clearTimer();
    const initialTime = Math.floor(Math.random() * (30 - 20 + 1)) + 30;
    setTimer(initialTime);
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          setIsPlaying(false);
          clearTimer();
          if (gameOverSound.current) {
            modal.current?.present();
            gameOverSound.current.currentTime = 0;
            gameOverSound.current?.play();
          }
          return 0;
        }

        if (ticSound.current) {
          ticSound.current.currentTime = 0;
          ticSound.current.play()
        }

        return prev - 1;
      });
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion?.id) {
      const newQuestion = getRandomQuestion(previousQuestionId || 0);
      setPreviousQuestionId(currentQuestion.id);
      setCurrentQuestion(newQuestion);
      setIsPlaying(false);
      initTimer();
    }
  };

  const getEmpanadaState = (timer: number): number => {
    if (timer > 40) return 0;
    if (timer > 30) return 1;
    if (timer > 20) return 2;
    if (timer > 10) return 3;
    if (timer > 0) return 4;
    return 5;
  };

  const empanadaState = getEmpanadaState(timer);

  const modal = useRef<HTMLIonModalElement>(null);

  const closeModal = () => {
    modal.current?.dismiss();
  }

  return (
    <div className="container-all">
      <IonModal id="challenge-modal" ref={modal}>
        <div className="modal-content">
          <h3 className="modal-subtitle">😵‍💫 ¡Ups... perdiste!</h3>
          <h2 className="modal-title">🔥 Reto del momento</h2>
          <p className="modal-description">
            Responde correctamente esta pregunta antes de que se acabe el tiempo. ⏰<br />
            ¡Demuestra de qué estás hecho! 💪
          </p>

          <div className="modal-buttons">
            <IonButton size="small" color="success" onClick={closeModal}>
              <IonIcon icon={checkmarkCircle} slot="start" />
              Aceptar
            </IonButton>
            <IonButton size="small" color="warning">
              <IonIcon icon={refreshCircle} slot="start" />
              Cambiar reto
            </IonButton>
          </div>
        </div>
      </IonModal>
      <h2 className="title">{themeSelected?.name}</h2>
      <div className="container">
        <div className={`sprite state-${empanadaState} ${isPlaying ? 'tic-animation' : ''}`}></div>
        <div className="question-container">
          <p className="current-question">{currentQuestion?.question}</p>
          <IonButton onClick={handleNextQuestion}>Cambiar pregunta</IonButton>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
