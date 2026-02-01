// src/components/Services.js
import React from "react";
import { therapistData } from "../utils/constants";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Specialized Therapy Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Evidence-based approaches tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapistData.services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
              All Services Include
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Personalized Treatment Plans",
                "Evidence-Based Methods",
                "Confidential Sessions",
                "Telehealth Options",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
