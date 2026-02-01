// src/components/Testimonials.js
import React from "react";
import { therapistData } from "../utils/constants";

const Testimonials = () => {
  return (
    <section className="section-padding bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hear from those who have walked the path to healing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {therapistData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-800 rounded-2xl p-8">
              <div className="text-3xl text-primary-300 mb-6">"</div>
              <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-neutral-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-semibold mb-6">
            Ready to Begin Your Healing Journey?
          </h3>
          <button className="btn-secondary px-8 py-4 text-lg">
            Schedule Your First Session
          </button>
          <p className="mt-4 text-neutral-400">
            Free 15-minute consultation available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
