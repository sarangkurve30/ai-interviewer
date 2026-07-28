import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const features = [
    "Linux",
    "AWS",
    "Docker",
    "Kubernetes",
    "DevOps",
    "Cloud",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Ace Your{" "}
          <span className="text-blue-500">
            Technical Interview
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-4xl mx-auto leading-8">
          Practice Linux, AWS, Docker, Kubernetes and DevOps interviews
          with an AI interviewer that asks questions, listens to your
          answers and provides instant feedback.
        </p>

        <div className="flex justify-center gap-5 mt-12 flex-wrap">

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Start Interview
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-gray-500 hover:bg-slate-800 px-8 py-4 rounded-xl text-lg transition"
          >
            Login
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies Covered
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {features.map((item) => (

            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold">
                {item}
              </h3>
            </div>

          ))}

        </div>

      </section>

      {/* Why Choose */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose AI Interviewer?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                AI Questions
              </h3>

              <p className="text-gray-400">
                Practice realistic Linux, Cloud and DevOps interview
                questions generated for technical roles.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Instant Feedback
              </h3>

              <p className="text-gray-400">
                Receive detailed performance reports with strengths,
                weaknesses and improvement suggestions.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Track Progress
              </h3>

              <p className="text-gray-400">
                Monitor your interview scores and improve every day with
                AI-powered practice sessions.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-500">

        © 2026 AI Interviewer. Built with React, Tailwind CSS and FastAPI.

      </footer>

    </div>
  );
}

export default Home;
