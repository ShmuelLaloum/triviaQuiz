import { useEffect, useState, useRef } from "react";
import { useQuiz } from "../context/QuizContext";
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
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${level}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          throw new Error("No questions available");
        }

        setQuestions(data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
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
  if (error) {
    return (
      <>
        😕 Oops
        {error}
      </>
    );
  }
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
