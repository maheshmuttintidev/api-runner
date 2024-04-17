"use client";
import React, { useCallback, useState } from "react";
import { InputRenderer } from "../components/InputRenderer";
import Link from "next/link";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    username: {
      component_name: "input_field",
      component_data_type: "text",
      label: "Username",
      value: "",
    },
    password: {
      component_name: "input_field",
      component_data_type: "text",
      label: "Password",
      value: "",
    },
  });
  const handleLogin = useCallback((e: any) => {
    if (e) {
      e.preventDefault();
    }
  }, []);
  return (
    <div className="w-full flex flex-col justify-center">
      <Link href={"/"}>
        <p className="px-3 py-2 bg-violet-400 w-max my-4 rounded-sm">
          Go to Home
        </p>
      </Link>
      <h1 className="text-xl font-bold pb-3 text-blue-400">
        API Runner Dev Login
      </h1>
      <form onSubmit={handleLogin} className="w-full flex flex-col">
        <InputRenderer data={loginForm} setData={setLoginForm} />
        <div>
          <button
            type="submit"
            title="Login"
            className="px-3 py-2 bg-red-400 w-max mt-4 rounded-sm"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
