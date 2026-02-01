// src/components/Hero.js
import React from "react";
import { therapistData } from "../utils/constants";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
            <span className="text-sm font-medium">
              Accepting New Clients in Denver
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
            Find Peace and Clarity in Your Journey
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
            Specialized therapy for anxiety, depression, and life transitions in
            Denver, Colorado
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary px-8 py-4 text-lg">
              Schedule Your Consultation
            </button>
            <button className="bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-lg transition duration-300 text-lg">
              Learn About My Approach
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-neutral-600">Clients Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">EMDR</div>
              <div className="text-sm text-neutral-600">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">CBT</div>
              <div className="text-sm text-neutral-600">Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
