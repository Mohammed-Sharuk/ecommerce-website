// src/pages/Contact.jsx

import React from "react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="relative h-80 flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">We’d love to hear from you!</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg">
              Feel free to reach out to us through any of the following methods. We're always here to help!
            </p>
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-lg">123 Fashion Street, New York, NY 10001</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">support@forever.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-lg">+1 234 567 890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="h-80">
        <iframe
          title="Forever Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.186220112547!2d-122.41941568468118!3d37.77492977975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858153b0b8d8b5%3A0x8c7ab8889dd93928!2sForever%2021!5e0!3m2!1sen!2sus!4v1617154878901!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
