import React, { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));

      setFormData({
        ...formData,
        profileImage: file,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Later:
    // Send formData using FormData + axios/fetch
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-[400px]"
      >
        <h1 className="text-2xl font-bold text-center mb-5">
          Create Account
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-5">
          <label className="cursor-pointer">
            <div className="w-28 h-28 rounded-full border overflow-hidden flex justify-center items-center bg-gray-200">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>Photo</span>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;