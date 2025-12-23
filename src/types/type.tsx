export type levels = {
  name: string;
  color: string;
};
export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type QuizContainerProps = {
  level: "easy" | "medium" | "hard";
};
export type QuizContextType = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;

  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;

  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;

  wrongAnswers: Question[];
  setWrongAnswers: React.Dispatch<React.SetStateAction<Question[]>>;

  userAnswers: string[];
  setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>;

  hasFetched: boolean;
  setHasFetched: React.Dispatch<React.SetStateAction<boolean>>;
};
export type QuestionProps = {
  question: Question;
};
export type OptionProps = {
  answer: string;
  onClick: () => void;
  style?: React.CSSProperties;
};
