import React, { useState } from "react";
import { useQuestions } from "../../hooks/useQuestions";
import { useThemeSelected } from "../../store/theme-selected.store";

const Quiz: React.FC = () => {
  const { themeSelected } = useThemeSelected();
  const { question, getRandomQuestion } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(question);
  const [previousQuestionId, setPreviousQuestionId] = useState<number | null>(null);

  const handleNextQuestion = () => {
    if (currentQuestion?.id) {
      const newQuestion = getRandomQuestion(previousQuestionId || 0);
      setPreviousQuestionId(currentQuestion.id);
      setCurrentQuestion(newQuestion);
    }
  };

  return (
    <div>
      <h2>{themeSelected?.name}</h2>
      <p>{currentQuestion?.question}</p>
      <button onClick={handleNextQuestion}>Siguiente</button>
    </div>
  );
};

export default Quiz;
