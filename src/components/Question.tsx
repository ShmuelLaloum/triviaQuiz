import { useQuiz } from "../components/QuizContext";
import Option from "./Option";
import type { QuestionProps } from "../types/type";
import { useState } from "react";

export default function Question({ question }: QuestionProps) {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,
    setScore,
    wrongAnswers,
    setWrongAnswers,
    userAnswers,
    setUserAnswers,
  } = useQuiz();

  const options = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);

    const correct = answer === question.correct_answer;

    setUserAnswers([...userAnswers, answer]);
    if (correct) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, question]);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 2000);
  };

  return (
    <div className="questionWrapper">
      <h3
        dangerouslySetInnerHTML={{ __html: question.question }}
        style={{ marginBottom: "20px" }}
      />
      {options.map((opt, i) => {
        const isCorrectOption = opt === question.correct_answer;
        const isSelected = opt === selectedAnswer;

        let backgroundColor = "";
        if (selectedAnswer) {
          if (isCorrectOption) backgroundColor = "green";
          else if (isSelected && !isCorrectOption) backgroundColor = "red";
        }

        return (
          <Option
            key={i}
            answer={opt}
            onClick={() => handleAnswer(opt)}
            style={{ backgroundColor }}
          />
        );
      })}
    </div>
  );
}
