// src/components/FAQ.js
import React, { useState } from "react";
import { therapistData } from "../utils/constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Everything you need to know about starting therapy
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {therapistData.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg text-neutral-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
              I'm here to help you feel comfortable and informed about starting
              therapy. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Email Your Question</button>
              <button className="bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition">
                Call: (303) 555-0123
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
