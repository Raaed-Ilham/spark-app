"use client";

import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <article className="absolute inset-x-4 bottom-8 p-6 rounded-3xl backdrop-blur-[[50px]] bg-white bg-opacity-10">
      <blockquote className="mb-6 text-3xl">
        &quot;We love the screen sharing and whiteboarding features,
        which have improved our presentations. Room.me has become an
        essential tool for our team, allowing us to collaborate
        effectively. Highly recommended!&quot;
      </blockquote>
      <cite className="text-2xl font-medium not-italic">
        Sarah Markivoc - Project Manager
      </cite>
    </article>
  );
};

export default TestimonialCard;