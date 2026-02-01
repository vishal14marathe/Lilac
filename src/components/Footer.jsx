// src/components/Footer.jsx (simplified version without constants import)
import React from "react";

const Footer = () => {
  // Local data instead of importing
  const officeData = {
    address: "1234 Healing Way, Suite 201, Denver, CO 80202",
    phone: "(303) 555-0123",
    email: "hello@drmayareynolds.com",
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl">
                  M
                </span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl">
                  Dr. Maya Reynolds
                </div>
                <div className="text-sm text-neutral-400">
                  Licensed Clinical Psychologist
                </div>
              </div>
            </div>
            <p className="text-neutral-400">
              Providing compassionate, evidence-based therapy in Denver,
              Colorado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-400 hover:text-white transition"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#office"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Our Office
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-neutral-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Anxiety Therapy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  EMDR Therapy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Life Transitions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  Depression Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-neutral-400">{officeData.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-neutral-400">{officeData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-neutral-400">{officeData.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © 2024 Dr. Maya Reynolds, Licensed Clinical Psychologist. All rights
            reserved.
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
