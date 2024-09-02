import React, { useState } from "react";
import { Link } from "react-router-dom";
import postData from "../../utility/Axios/postData";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    currency: "YEN",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postData(
      `${process.env.REACT_APP_BACKEND_URL}auth/register`,
      formData,
      "User Created Succesfully"
    );
    console.log(result);
    if (result.status == 200) {
      localStorage.setItem("token", result.token);

      //redirect to shop
    }
  };

  const options = ["NGN", "CAD", "USD", "EUR", "GBP"];
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="full_name"
                name="full_name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currency" className="form-label">
                Currency
              </label>
              <select
                className="form-control"
                name="currency"
                id="currency"
                onChange={handleChange}
              >
                <option option value="YEN" defaultValue>
                  {" "}
                  YEN
                </option>
                {options.map((option, index) => {
                  return (
                    <>
                      {
                        <option key={index} value={option}>
                          {option}
                        </option>
                      }
                    </>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={handleChange}
                name="password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirm_password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>

            <div className="mt-3 text-center">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
