import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard Loaded");
  }, []);

  const stats = [
    { title: "Total Interviews", value: 12 },
    { title: "Average Score", value: "82%" },
    { title: "Best Score", value: "95%" },
    { title: "Completed", value: 10 },
  ];

  const history = [
    {
      role: "Linux Administrator",
      score: "90%",
      date: "25 Jul 2026",
    },
    {
      role: "Docker Interview",
      score: "85%",
      date: "22 Jul 2026",
    },
    {
      role: "AWS Cloud",
      score: "88%",
      date: "18 Jul 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            Welcome 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Ready for your next AI Interview?
          </p>
        </div>

        <button
          onClick={() => navigate("/interview")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Start Interview
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-slate-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-gray-400">
              {item.title}
            </h2>

            <p className="text-4xl font-bold mt-3">
              {item.value}
            </p>
          </div>
        ))}

      </div>

      {/* Recent Interviews */}
      <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

        <h2 className="text-2xl font-bold mb-6">
          Recent Interviews
        </h2>

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-slate-700">

              <th className="pb-3">Role</th>

              <th className="pb-3">Score</th>

              <th className="pb-3">Date</th>

            </tr>

          </thead>

          <tbody>

            {history.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-700"
              >
                <td className="py-4">{item.role}</td>

                <td className="py-4 text-green-400">
                  {item.score}
                </td>

                <td className="py-4">
                  {item.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;
