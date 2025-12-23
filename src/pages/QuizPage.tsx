import { useLocation } from "react-router-dom";
import QuizContainer from "../components/QuizContainer";
import type { QuizContainerProps } from "../types/type";

export default function QuizPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const levelParam = params.get("level") || "easy";
  const level: QuizContainerProps["level"] =
    levelParam === "easy" || levelParam === "medium" || levelParam === "hard"
      ? levelParam
      : "easy";
  return (
    <div>
      <QuizContainer level={level}></QuizContainer>
    </div>
  );
}
