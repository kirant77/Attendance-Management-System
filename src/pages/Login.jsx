import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/4180157.jpg";
import { MdHeight } from "react-icons/md";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "admin.hr@hrsystem.io";
    const validPassword = "admin@123";

    if (email === validEmail && password === validPassword) {
      console.log("Login successful");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      className="fullscreen-center"
      style={{ display: "flex", height: "100vh" }}
    >
      {/* Logo section (left side) */}
      <div
        className="logo-section"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "80%", objectFit: "contain" }}
        />
      </div>
      {/* Login form section (right side) */}

      <div
        className="login-container"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "auto",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Login</h2>
          <form
            onSubmit={handleLogin}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>

          <p style={{ marginTop: "10px" }}>
            Don't have an account?{" "}
            <span
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/register")}
            >
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
