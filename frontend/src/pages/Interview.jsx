import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Interview() {
  const questions = [
    "Tell me about yourself.",
    "What is Linux?",
    "What is Docker?",
    "What is AWS?"
  ];
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
    navigate("/report");
  }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          AI Interview
        </h1>

        <p className="text-gray-400 mt-2">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700 h-3 rounded-full mt-6">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-right text-gray-400 mt-2">
          {progress}%
        </p>
      </div>

      {/* Question Card */}
      <div className="bg-slate-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-gray-400 mb-4 text-lg">
          Question
        </h2>

        <p className="text-2xl font-semibold">
          {questions[currentQuestion]}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-10">

        <button
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="bg-gray-700 hover:bg-gray-600 disabled:opacity-40 px-6 py-3 rounded-lg"
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          {currentQuestion === questions.length - 1
  ? "Finish Interview"
  : "Next →"}
        </button>

      </div>

    </div>
  );
}

export default Interview;
