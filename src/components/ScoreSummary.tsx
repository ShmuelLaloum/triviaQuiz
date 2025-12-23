import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import "../types/type"

export default function ScoreSummary() {
  const {
    score,
    wrongAnswers,
    setQuestions,
    setCurrentQuestionIndex,
    setWrongAnswers,
    setScore,
  } = useQuiz();
  const finalScore = score * 10;
  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setWrongAnswers([]);
    setScore(0);
  };
  return (
    <div>
      <h2>Score: {finalScore}% </h2>
      {wrongAnswers.length > 0 && (
        <div>
          <h3>Wrong Answers:</h3>
          {wrongAnswers.map((q, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: q.question }} />
          ))}
          <Link
            to={"/"}
            className="restartBtn"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={resetQuiz}
          >
            restart
          </Link>
        </div>
      )}
    </div>
  );
}
