import { useEffect, useState } from "react";
import { useQuiz } from "./QuizContext";
import type { QuizContainerProps } from "../types/type";
import Question from "./Question";
import ScoreSummary from "./ScoreSummary";
import ProgressBar from "./ProgressBar";
import "../styles/style.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function QuizContainer({ level }: QuizContainerProps) {
  const { questions, setQuestions, currentQuestionIndex } = useQuiz();
  const [loading, setLoading] = useState<boolean>(true);
  let hasFetched = false;

  useEffect(() => {
    if (hasFetched) return;
    hasFetched = true;
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${level}`
        );
        const data = await res.json();
        setQuestions(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [level, setQuestions]);

  if (loading)
    return (
      <Box className="centerPage">
        <CircularProgress />
      </Box>
    );
  if (!questions.length) return <p>No questions found</p>;

  return (
    <div className="centerPage">
      {currentQuestionIndex >= questions.length ? (
        <ScoreSummary />
      ) : (
        <>
          <Question question={questions[currentQuestionIndex]} />
          <ProgressBar />
        </>
      )}
    </div>
  );
}
