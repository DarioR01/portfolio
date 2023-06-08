'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, LinkedIn_Monocrome, Phone } from '../socialSVG';

type Inputs = {
  first: string;
  last: string;
  email: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [message, setMessage] = useState('');
  const [postError, setPostError] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setPostError(false);
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        first: data.first,
        last: data.last,
        email: data.email,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (res.ok) {
      setPostSuccess(true);
    }
    if (error) {
      setPostError(true);
      return;
    }
  };

  return (
    <main className="2xl:flex 2xl:grow 2xl:items-center container mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
      <div className="h-full 2xl:flex 2xl:items-center mt-3">
        <div className="relative">
          {postSuccess && (
            <p className="-top-20 bg-green-500 p-5 w-3/4 mb-3 rounded-lg">
              Success
            </p>
          )}
          <div className="2xl:grid 2xl:grid-cols-3 shadow-lg shadow-primary-500/20">
            <div className="flex flex-col bg-primary-500 p-11 col-span-1 rounded-t-lg 2xl:rounded-none 2xl:rounded-l-lg">
              <h1 className="text-white text-3xl font-semibold">
                Let&#39;s get in touch
              </h1>
              <div className="flex items-center grow mt-4 2xl:mt-0">
                <div className="flex flex-col gap-y-12">
                  <div className="flex gap-x-1.5 items-center">
                    <span className="border-2 rounded-full -m-1">
                      <Phone className="fill-white" />
                    </span>
                    <p className="text-white text-xl ml-3">
                      <a href="tel:+447305355051">+44 7305355051</a>
                    </p>
                  </div>

                  <div className="flex gap-x-1.5 items-center">
                    <span className="border-2 rounded-full -m-1">
                      <Mail className="fill-white" />
                    </span>
                    <p className="text-white text-xl ml-3">
                      <a href="mailto:dario.russo.052001@gmail.com">
                        dario.russo.052001@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-x-1.5 items-center">
                    <span className="border-2 rounded-full -m-1">
                      <LinkedIn_Monocrome className="fill-white" />
                    </span>

                    <p className="text-white text-xl ml-3">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between gap-x-1.5 mt-4">
                  <label className="block grow">
                    <span
                      className={`text-gray-700 ${
                        errors.first && 'text-pink-500 mr-2'
                      }`}
                    >
                      Name
                      <abbr className="absolute text-pink-500" title="required">
                        *
                      </abbr>
                    </span>
                    {errors.first && (
                      <span className="text-pink-500">
                        {errors.first.message || 'is required'}
                      </span>
                    )}
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0`}
                      aria-invalid={errors.first ? 'true' : 'false'}
                      {...register('first', {
                        required: true,
                        pattern: {
                          value: /^[a-zA-Z0-9]*$/,
                          message: 'Only characters are allowed',
                        },
                      })}
                    />
                  </label>

                  <label className="block grow">
                    <span
                      className={`text-gray-700 ${
                        errors.last && 'text-pink-500 mr-2'
                      }`}
                    >
                      Surname
                      <abbr className="absolute text-pink-500" title="required">
                        *
                      </abbr>
                    </span>
                    {errors.last && (
                      <span className="text-pink-500">
                        {errors.last.message || 'is required'}
                      </span>
                    )}
                    <input
                      type="text"
                      className={`mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0`}
                      aria-invalid={errors.last ? 'true' : 'false'}
                      {...register('last', {
                        required: true,
                        pattern: {
                          value: /^[a-zA-Z0-9]*$/,
                          message: 'Only characters are allowed',
                        },
                      })}
                    />
                  </label>
                </div>

                <label className="block mt-4">
                  <span
                    className={`text-gray-700 ${
                      errors.email && 'text-pink-500 mr-2'
                    }`}
                  >
                    Email
                    <abbr className="absolute text-pink-500" title="required">
                      *
                    </abbr>
                  </span>
                  {errors.email && (
                    <span className="text-pink-500">
                      {errors.email.message || 'is required'}
                    </span>
                  )}
                  <input
                    type="email"
                    className={`mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    {...register('email', {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Not Valid Email',
                      },
                    })}
                  />
                </label>

                <label className="block mt-4">
                  <span className="text-gray-700">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className={`mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 invalid:border-pink-500`}
                  />
                </label>

                <button
                  type="submit"
                  formNoValidate
                  className="bg-primary-500 text-white text-xl p-3 mt-4 rounded-md hover:bg-primary-600 shadow-lg mb-6"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
