// src/components/About.js
import React from "react";
import { therapistData } from "../utils/constants";

const About = () => {
  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-secondary-100"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
              <div className="text-4xl font-serif font-bold text-primary-600 mb-2">
                10+
              </div>
              <div className="text-neutral-700">
                Years of Clinical Experience
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-6">
              A Compassionate Space for Healing
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              With over 10 years of experience in clinical psychology, I provide
              integrative therapy that combines evidence-based techniques with
              genuine human connection. My practice in Denver focuses on
              creating a safe, non-judgmental environment where you can explore
              challenges and discover your strengths.
            </p>

            <div className="space-y-4 mb-8">
              {therapistData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-serif font-semibold text-xl text-neutral-900 mb-3">
                My Therapeutic Approach
              </h3>
              <p className="text-neutral-600">
                I believe in a collaborative, strengths-based approach.
                Together, we'll develop practical strategies while exploring the
                deeper patterns that shape your experiences. Whether through
                EMDR for trauma, CBT for anxiety, or mindfulness for stress
                reduction, your treatment will be personalized to your unique
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
