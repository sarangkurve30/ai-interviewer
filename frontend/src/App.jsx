function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>🤖 AI Interview Bot</h1>

      <p>Practice Linux, AWS, Docker & DevOps Interviews</p>

      <button
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: "#3b82f6",
          color: "white",
          marginTop: "20px",
        }}
      >
        Start Interview
      </button>
    </div>
  );
}

export default App;
