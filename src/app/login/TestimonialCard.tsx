"use client";

import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <article className="absolute inset-x-4 bottom-8 p-6 rounded-3xl backdrop-blur-md bg-white bg-opacity-80 shadow-xl">
      <blockquote className="mb-6 text-3xl text-black font-[500] font-sans italic tracking-wide leading-snug">
        &quot;We love the screen sharing and whiteboarding features,
        which have improved our presentations. Room.me has become an
        essential tool for our team, allowing us to collaborate
        effectively. Highly recommended!&quot;
      </blockquote>
      <cite className="text-2xl text-black font-semibold not-italic font-sans">
        Sarah Markivoc – Project Manager
      </cite>
    </article>
  );
};

export default TestimonialCard;
