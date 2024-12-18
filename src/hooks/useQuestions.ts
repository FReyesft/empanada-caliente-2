import { Question, questions } from "../utils/themes";
import { useThemeSelected } from "../store/theme-selected.store";

interface useTheme {
  question: Question;
  getRandomQuestion: (previousQuestionId: number) => Question;
}

export const useQuestions = (): useTheme => {
  const { themeSelected } = useThemeSelected();

	const filteredQuestionsByTheme = (): Question[] => {
		if (themeSelected?.id === 0) {
			return questions;
		}
    return questions.filter((question) => themeSelected?.id === question.idTheme);
  };

	const initialQuestion = filteredQuestionsByTheme()[0];

  const getRandomQuestion = (previousQuestionId: number): Question => {
    const filteredQuestions = filteredQuestionsByTheme();

    const remainingQuestions = filteredQuestions.filter(
      (question) => question.id !== previousQuestionId
    );

    if (remainingQuestions.length === 0) return initialQuestion;

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    return remainingQuestions[randomIndex];
  };

  return {
    question: initialQuestion,
    getRandomQuestion,
  };
};
