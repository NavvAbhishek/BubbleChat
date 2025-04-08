import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import signupImg from "../assets/signup_image.png";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSignup } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen justify-center bg-white flex gap-10">
      {/* Form Side */}
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-2xl w-[28rem] p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-deepBlue">
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-deepBlue mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-white text-black px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-lightBlue`}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-deepBlue mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white text-black px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-lightBlue`}
              />
            </div>

            <div className="mb-8 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-deepBlue mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-white text-black px-4 py-3 rounded-md borderfocus:outline-none focus:ring-2 focus:ring-lightBlue`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeClosed className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSignup}
              className="w-full bg-darkYellow hover:bg-lightYellow text-deepBlue font-bold py-3 px-4 rounded-md transition duration-300 shadow-md hover:shadow-lg"
            >
              {isSignup ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                " Create Account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-lightBlue font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Image Side */}
      <div className="hidden md:flex justify-center items-center">
        <div>
          <img src={signupImg} alt="Sign Up" className="max-w-sm h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
