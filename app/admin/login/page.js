"use client";

import { useState }
from "react";

import { useRouter }
from "next/navigation";

export default function LoginPage() {

  const router =
    useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    // SIMPLE ADMIN LOGIN
    if (

      email === "admin@gmail.com"

      &&

      password === "123456"

    ) {

      localStorage.setItem(
        "admin",
        "true"
      );

      router.push(
        "/admin/blogs"
      );

    } else {

      alert(
        "Invalid Credentials"
      );

    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="bg-[#111] p-10 rounded-2xl w-full max-w-md border border-gray-800">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">

          Admin Login

        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          className="w-full p-4 mb-5 rounded bg-black border border-gray-700 text-white"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          className="w-full p-4 mb-6 rounded bg-black border border-gray-700 text-white"
        />

        {/* BUTTON */}
        <button

          onClick={handleLogin}

          className="w-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white py-4 rounded-lg"

        >

          Login

        </button>

      </div>

    </div>
  );
}