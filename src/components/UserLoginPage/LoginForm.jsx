import React from 'react';
import useLogin from './useLogin';
import images from '../assets/images';

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error,
    loading,
    success
  } = useLogin();

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit} id="LoginForm_1">
      <div className="rounded-md shadow-sm -space-y-px" id="LoginForm_2">
        <div id="LoginForm_3">
          <label htmlFor="email-address" className="sr-only" id="LoginForm_4">
            Email address
          </label>
          <input
            id="LoginForm_5"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div id="LoginForm_6">
          <label htmlFor="password" className="sr-only" id="LoginForm_7">
            Password
          </label>
          <input
            id="LoginForm_8"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center" id="LoginForm_9">
          {error}
        </div>
      )}

      {success && (
        <div className="text-green-500 text-sm text-center" id="LoginForm_10">
          Login successful!
        </div>
      )}

      <div id="LoginForm_11">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
          id="LoginForm_12"
        >
          {loading ? (
            <span id="LoginForm_13">Signing in...</span>
          ) : (
            <span id="LoginForm_14">Sign in</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;