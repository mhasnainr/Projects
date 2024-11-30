"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [resultStr, setResultStr] = useState<string>(
    "Your results will show here"
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Hamburger menu state
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const submitBtnRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const email = usernameRef.current?.value || "";
    const apiKey = process.env.NEXT_PUBLIC_EMAIL_VALIDATION_API_KEY; // using environment variable here
    const url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

    try {
      const res = await fetch(url);
      const result = await res.json();

      let str = "";
      for (const key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
          str += `<div>${key}: ${result[key]}</div>`;
        }
      }

      setResultStr(str);
    } catch (error) {
      setResultStr("Error fetching results");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="w-full">
        <nav className="bg-black text-white flex items-center justify-between p-4 px-3">
          <div className="flex space-x-3 items-center">
            <Image
              src={"email.svg"}
              alt={""}
              width={25}
              height={25}
              className="invert"
            />
            <span className="text-lg md:text-xl">SafeMail</span>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm md:text-base">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white p-4 space-y-2 text-center">
            <a href="/" className="block hover:underline">
              Home
            </a>
            <a href="/" className="block hover:underline">
              About
            </a>
            <a href="/" className="block hover:underline">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="container max-w-lg mx-auto">
          <h1 className="py-6 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Enter your email to validate
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-6"
          >
            <label htmlFor="username" className="text-base md:text-lg">
              Email Address
            </label>
            <input
              placeholder="Enter your email"
              type="text"
              id="username"
              ref={usernameRef}
              className="w-full max-w-md py-2 px-4 border-2 border-black rounded-md text-sm md:text-base"
              required
            />
            <input
              id="submitBtn"
              ref={submitBtnRef}
              className="bg-black text-white py-3 px-6 border border-gray-400 rounded-md cursor-pointer hover:bg-gray-800 transition-all"
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        <div className="container max-w-lg mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Your Results</h2>
          <div id="resultCont" className="text-left break-words">
            {loading ? (
              <Image
                src={"loading.svg"}
                alt="Loading..."
                width={23}
                height={23}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: resultStr }} />
            )}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-white text-xs p-3 flex items-center justify-center w-full">
        <div className="container max-w-screen-lg text-center">
          Copyright &copy; | SafeMail.com | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
