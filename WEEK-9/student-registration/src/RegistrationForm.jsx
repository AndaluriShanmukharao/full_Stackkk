import { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!terms) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    setSubmitted(true);

    console.log("Student Data:", {
      name,
      email,
      password,
      age,
      gender,
    });
  }

  function handleReset() {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setGender("Male");
    setTerms(false);
    setError("");
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="page">
        <div className="success-box">
          <h1>Registration Successful! ✅</h1>
          <p>Welcome, <strong>{name}</strong>!</p>
          <p>Your registration has been completed successfully.</p>
          <button onClick={handleReset}>Register Another Student</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="registration-container">
        <h1>Student Registration</h1>
        <p className="subtitle">Create your student account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password *</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span>I agree to the Terms and Conditions</span>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;