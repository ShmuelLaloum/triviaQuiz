import { Link } from "react-router-dom";
import type { levels } from "../types/type";
import "../styles/style.css";

export default function SelectLevel() {
  const levels: levels[] = [
    { name: "easy", color: "#51cf66" },
    { name: "medium", color: "#ffa94d" },
    { name: "hard", color: "#ff6b6b" },
  ];
  return (
    <div className="centerPage">
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Welcome to trivia quiz
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>Choose level:</p>

      <div style={{ display: "flex", gap: "15px" }}>
        {levels.map((level, index) => (
          <Link
            key={index}
            to={`/QuizPage?level=${level.name}`}
            style={{
              padding: "10px 20px",
              backgroundColor: level.color,
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {level.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
