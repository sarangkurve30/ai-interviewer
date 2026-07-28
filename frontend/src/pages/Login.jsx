import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
function Login() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
	function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
  alert("Please fill all fields");
  return;
}

    console.log("Email:", email);
    console.log("Password:", password);
    
    navigate("/dashboard");
    
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      
      <Card className="w-full max-w-md p-10">

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Login to continue your interview journey
        </p>

        <form onSubmit={handleLogin}>

          <Input
            type="email"
            placeholder="Email"
	    value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
	    value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <p className="text-white mb-2">
  {email}
</p>

<p className="text-white mb-4">
  {password}
</p>



          <Button
	  text="Login"
	  type="submit"
	  className="w-full"
	  />

        </form>

      </Card>

    </div>
  );
}

export default Login;
