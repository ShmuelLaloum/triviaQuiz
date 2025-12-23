import { Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import SelectLevel from "./pages/SelectLevel";
function App() {
  return (
      <Routes>
        <Route path="/" element={<SelectLevel />} />
        <Route path="/quizPage" element={<QuizPage />} />
      </Routes>
  );
}

export default App;
