import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-green-400">
          🎉 Interview Completed
        </h1>

        <p className="text-gray-400 mt-3">
          Great Job! Here is your interview report.
        </p>
      </div>

      {/* Overall Score */}
      <div className="bg-slate-800 rounded-xl p-8 shadow-lg text-center mb-10">
        <h2 className="text-xl text-gray-400 mb-3">
          Overall Score
        </h2>

        <p className="text-6xl font-bold text-blue-400">
          88%
        </p>
      </div>

      {/* Score Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-lg text-gray-400">
            Technical Skills
          </h2>

          <p className="text-4xl font-bold text-green-400 mt-3">
            90%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-lg text-gray-400">
            Communication
          </h2>

          <p className="text-4xl font-bold text-yellow-400 mt-3">
            82%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-lg text-gray-400">
            Confidence
          </h2>

          <p className="text-4xl font-bold text-purple-400 mt-3">
            87%
          </p>
        </div>

      </div>

      {/* Feedback */}
      <div className="bg-slate-800 rounded-xl p-8 shadow-lg mb-10">

        <h2 className="text-2xl font-bold mb-5">
          🤖 AI Feedback
        </h2>

        <ul className="space-y-3 text-lg">

          <li>✅ Strong Linux fundamentals.</li>

          <li>✅ Good communication skills.</li>

          <li>✅ Answered Docker questions confidently.</li>

          <li>⚠ Improve Networking concepts.</li>

          <li>⚠ Work on Kubernetes basics.</li>

        </ul>

      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6">

        <button
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
        >
          Download Report
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold"
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default Report;
