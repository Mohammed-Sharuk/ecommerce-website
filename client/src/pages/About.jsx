// src/pages/About.jsx

import React from "react";
import { FaCheckCircle, FaTruck, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Background Banner */}
      <div className="relative h-80 flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fashion Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Discover the story behind Forever.</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Our Journey Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-lg leading-relaxed">
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission at <span className="font-semibold">Forever</span> is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Assurance */}
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-300">
            <FaCheckCircle className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-lg">
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>

          {/* Convenience */}
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-300">
            <FaTruck className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Convenience</h3>
            <p className="text-lg">
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>

          {/* Customer Service */}
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-300">
            <FaHeadset className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Exceptional Customer Service</h3>
            <p className="text-lg">
              Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
