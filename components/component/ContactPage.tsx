"use client";
import illustration from "../../app/assests/undraw_Personal_email_re_4lx7.png";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Illustration */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <Image
              src={illustration}
              alt="Contact Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              We'd Love to Hear From You!
            </h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out with any questions or comments. We're here
              to help!
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-customBlue text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-customDarkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
