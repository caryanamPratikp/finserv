import React, { useState } from "react";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhone,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    role: "",
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      toast.success("Registration Successful 🎉");

      navigate("/");

    } catch (err) {

      toast.error("Registration Failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="flex h-screen w-full overflow-hidden">

      {/* LEFT */}

      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0a2540] via-[#0b2a4a] to-[#081f36] text-white px-20 py-20 flex-col justify-between">

        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Join Caryanam <br />

            FinServ Today

          </h1>

          <p className="text-gray-300 max-w-xl">

            Secure & fast finance management platform.

          </p>
        </div>

      </div>

      {/* RIGHT */}

      <div className="flex w-full md:w-1/2 items-center justify-center bg-[#f5f7fb] p-4">

        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-semibold text-center mb-1">
            Create Account
          </h2>

          <p className="text-sm text-gray-500 text-center mb-6">
            Register to continue
          </p>

          <form onSubmit={handleSubmit}>

            {/* ROLE */}

            <label className="text-sm text-gray-600">
              Select Role
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-3 mt-1 mb-4 bg-gray-50 outline-none"
            >
              <option value="">
                Choose Role
              </option>

              <option value="ADMIN">
                Admin
              </option>

              <option value="DEALER">
                Dealer
              </option>

              <option value="USER">
                User
              </option>
            </select>

            {/* FULL NAME */}

            <label className="text-sm text-gray-600">
              Full Name
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 mt-1 mb-4 bg-gray-50">

              <FaUser className="text-gray-400" />

              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={form.fullName}
                onChange={handleChange}
                className="ml-2 bg-transparent outline-none w-full text-sm"
              />

            </div>

            {/* MOBILE */}

            <label className="text-sm text-gray-600">
              Mobile Number
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 mt-1 mb-4 bg-gray-50">

              <FaPhone className="text-gray-400" />

              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                value={form.mobile}
                onChange={handleChange}
                className="ml-2 bg-transparent outline-none w-full text-sm"
              />

            </div>

            {/* EMAIL */}

            <label className="text-sm text-gray-600">
              Email
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 mt-1 mb-4 bg-gray-50">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                className="ml-2 bg-transparent outline-none w-full text-sm"
              />

            </div>

            {/* PASSWORD */}

            <label className="text-sm text-gray-600">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 mt-1 mb-5 bg-gray-50">

              <FaLock className="text-gray-400" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                className="ml-2 bg-transparent outline-none w-full text-sm"
              />

              {showPassword ? (

                <FaEyeSlash
                  onClick={() =>
                    setShowPassword(false)
                  }
                  className="cursor-pointer text-gray-400"
                />

              ) : (

                <FaEye
                  onClick={() =>
                    setShowPassword(true)
                  }
                  className="cursor-pointer text-gray-400"
                />

              )}
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#0b2a4a] text-white rounded-lg font-medium hover:bg-[#081f36] transition"
            >

              {loading
                ? "Creating Account..."
                : "Register →"}

            </button>

          </form>

          <p className="mt-4 text-sm text-center text-gray-500">

            Already have an account?{" "}

            <span
              onClick={() => navigate("/")}
              className="text-[#1cc5b7] cursor-pointer font-medium hover:underline"
            >
              Login
            </span>

          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;