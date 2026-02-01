// src/components/Office.js
import React from "react";
import { therapistData } from "../utils/constants";

const Office = () => {
  return (
    <section id="office" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Calming Denver Office
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A peaceful, private environment designed for comfort and healing in
            the heart of Denver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100"></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-primary-50"></div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-secondary-100 to-accent-50"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Located in the heart of Denver, our office provides a peaceful,
              private environment designed for comfort and healing. With natural
              light, comfortable seating, and a warm atmosphere, it's a space
              where you can feel safe to explore and grow.
            </p>

            <div className="space-y-6 mb-8">
              <h3 className="font-serif font-semibold text-2xl text-neutral-900">
                Office Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {therapistData.office.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-4"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Box */}
            <div className="bg-gradient-to-r from-primary-50 to-white border border-primary-100 rounded-xl p-6">
              <h4 className="font-serif font-semibold text-xl text-neutral-900 mb-4">
                Visit Our Office
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-neutral-900">
                      {therapistData.office.address}
                    </div>
                    <div className="text-sm text-neutral-600">
                      Free parking available
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-neutral-900">
                      {therapistData.office.hours}
                    </div>
                    <div className="text-sm text-neutral-600">
                      By appointment only
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;
