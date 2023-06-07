"use client";

import { useState, useEffect } from "react";
import { Mail, LinkedIn, Phone } from "../socialSVG";
const Contact = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        first: first,
        last: last,
        email: email,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(first, last, email, message);
  };

  return (
    <main className="xl:mt-0 xl:flex xl:items-center mt-12 container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
      <div className="xl:grid xl:grid-cols-3 shadow-lg shadow-primary-500/20">
        <div className="flex flex-col bg-primary-500 p-11 col-span-1 rounded-t-lg xl:rounded-none xl:rounded-l-lg">
          <h1 className="text-white text-3xl font-semibold">
            Let&#39;s get in touch
          </h1>
          <div className="flex items-center grow mt-4 xl:mt-0">
            <div className="flex flex-col gap-y-12">
              <div className="flex gap-x-1.5 items-center">
                <Phone className="w-12 h-12 stroke-1 stroke-black fill-white border-2 rounded-full" />
                <p className="text-white text-lg">
                  <a href="tel:+447305355051">+44 7305355051</a>
                </p>
              </div>

              <div className="flex gap-x-1.5 items-center">
                <Mail className="w-12 h-12 stroke-1 stroke-black fill-white border-2 rounded-full" />
                <p className="text-white text-lg">
                  <a href="mailto:dario.russo.052001@gmail.com">
                    dario.russo.052001@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex gap-x-1.5 items-center">
                <LinkedIn className="w-12 h-12 stroke-1 stroke-black fill-white border-2 rounded-full" />
                <p className="text-white text-lg">
                  <a href="https://www.linkedin.com/in/dariorusso052001">
                    Dario Russo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 p-11 bg-white">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-x-1.5 mt-4">
              <label className="block grow">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  name="first"
                  value={first}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirst(e.target.value)
                  }
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0"
                />
              </label>

              <label className="block grow">
                <span className="text-gray-700">Surname</span>
                <input
                  type="text"
                  name="last"
                  value={last}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLast(e.target.value)
                  }
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0"
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-gray-700">Email</span>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0"
              />
            </label>

            <label className="block mt-4">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0"
              />
            </label>

            <button className="bg-primary-500 text-white text-xl p-3 mt-4 rounded-md hover:bg-primary-600 shadow-lg mb-6">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
