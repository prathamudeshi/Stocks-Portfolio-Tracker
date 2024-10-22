import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const response = await fetch("https://your-api-endpoint.com/register", {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        // Handle successful registration (e.g., redirect or show a success message)
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          alignSelf: "center",
          // alignItems: "center",
          margin: "auto",
          gap: "20px",
          // width: "80vw",
        }}
      >
        <h2 style={{ textAlign: "center", alignSelf: "center" }}>
          <strong>Register</strong>
        </h2>
        <div style={{ width: "100%" }}>
          <label style={{ width: "50px" }}>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div style={{ width: "100%" }}>
          <label style={{ width: "50px" }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div style={{ width: "100%" }}>
          <label style={{ width: "50px" }}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "25px" }}>
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
