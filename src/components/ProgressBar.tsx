import { useQuiz } from "../components/QuizContext";

export default function ProgressBar() {
  const { currentQuestionIndex, questions } = useQuiz();
  const percent = (currentQuestionIndex / questions.length) * 100;

  return (
    <div style={{ border: "1px solid #000", width: "40%", margin: "10px 0" }}>
      <div
        style={{
          width: `${percent}%`,
          background: "green",
          height: "17px",
        }}
        >
        {percent}%
      </div>
    </div>
  );
}
