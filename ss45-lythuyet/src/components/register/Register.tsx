import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Register button clicked");
    console.log("User:", user);
    navigate("/login", { state: user });
  };

  return (
    <div>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
