import React from "react";

const Register = () => {
  return (
    <div>
      <section className="bg-transparent">
        <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 cardo text-6xl font-semibold text-white"
          >
            <img className="w-32 h-32 mr-2" src="./tt-nobg.png" alt="logo" />
            Register
          </a>
          <div className="w-4/6 text-center bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
              <h1 className="text-xl work text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                Create an account
              </h1>
              <form className="space-y-4 monts md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-purple-600"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 mx-auto p-2.5"
                    placeholder="shrudex@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-purple-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-1/2 mx-auto bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-purple-600"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 mx-auto p-2.5"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-1/4 text-white bg-purple-600 hover:bg-purple-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-black hover:underline"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
