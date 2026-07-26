import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-blue-400">
          AI Interview
        </h1>

        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-5">

        <h1 className="text-6xl font-bold">
          Ace Your
          <span className="text-blue-400"> Technical Interview</span>
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Practice Linux, AWS, Docker, Kubernetes and DevOps interviews
          with an AI interviewer that asks questions, listens to your
          answers and gives instant feedback.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg">
            Start Interview
          </button>

          <Link
            to="/login"
            className="border border-white px-8 py-3 rounded-xl text-lg"
          >
            Login
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-20 text-gray-300">

          <div>🐧 Linux</div>
          <div>☁ AWS</div>
          <div>🐳 Docker</div>
          <div>☸ Kubernetes</div>
          <div>⚙ DevOps</div>

        </div>

      </div>
    </div>
  );
}

export default Home;
