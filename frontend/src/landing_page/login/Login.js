import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="container row">
      <form
        className="col-5 offset-4 mt-5 border border-5 border-secondary-subtle p-5 rounded-4"
        onSubmit={handleSubmit}
      >
        <div class="mb-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control fs-6"
            id="email"
            placeholder="enter your email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div class="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control fs-6"
            id="password"
            placeholder="enter password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <span><button className="btn btn-primary me-5">Login</button></span>

        <span className="ms-4"> if you don't have an account? <Link to="/signup">Signup</Link></span>
      </form>
    </div>
  );
}

export default Login;
