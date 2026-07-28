import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">

      <h1 className="text-8xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-3xl mt-4 font-semibold">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2">
        The page you are looking for doesn't exist.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
      >
        Back to Dashboard
      </button>

    </div>
  );
}

export default NotFound;
