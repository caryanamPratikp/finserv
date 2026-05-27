import React, { useState } from "react";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      // ADMIN

      if (
        form.email === "admin@gmail.com" &&
        form.password === "admin123"
      ) {

        navigate("/admin/dashboard");

        return;
      }

      // DEALER

      if (
        form.email === "dealer@gmail.com" &&
        form.password === "dealer123"
      ) {

        navigate("/dealer/dashboard");

        return;
      }

      // USER

      if (
        form.email === "user@gmail.com" &&
        form.password === "user123"
      ) {

        navigate("/user/dashboard");

        return;
      }

      toast.error("Invalid Credentials");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="flex h-screen w-full overflow-hidden">

      {/* LEFT PANEL */}

      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0a2540] via-[#0b2a4a] to-[#081f36] text-white px-20 py-20 flex-col justify-between">

        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Caryanam <br />

            FinServ

          </h1>

          <p className="text-gray-300">

            Auto Finance Platform

          </p>

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="flex w-full md:w-1/2 items-center justify-center bg-[#f5f7fb] p-4">

        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-semibold text-center mb-1">

            Welcome Back

          </h2>

          <p className="text-sm text-gray-500 text-center mb-6">

            Sign in to continue

          </p>

          <form onSubmit={handleSubmit}>

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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#0b2a4a] text-white rounded-lg font-medium hover:bg-[#081f36] transition"
            >

              {loading
                ? "Signing in..."
                : "Sign In →"}

            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;