import React from "react";
import "./whatsNew.css";

const testimonials = [
  {
    image: "/demo.jfif",
    position: "Get more responses through chat with jobseekers",
    text: "Quickly connect with jobseekers through chat and get more responses.",
  },
  {
    image: "/demo.jfif",
    position: "Smart Comments, Trackers & Semantic Search in RESDEX",
    text: "Improve efficiency by using smart comments, tasks and reminders.",
  },
  {
    image: "/demo.jfif",
    position: "Naukri Trends",
    text: "Hiring Trends for IT, BFSI, BPO/ITes, & Pharma during Jul'19 - Sep'19",
  },
];

const WhatsNew = () => {
  return (
    <div className="recruiters-testimonials-section">
      <div className="recruiters-testimonials-text">
        <h1 className="recruiters-main-heading">What's New</h1>
      </div>

      <div className="recruiters-testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="recruiters-testimonial-card">
            <div className="recruiters-avatar-container">
              <img
                src={testimonial.image}
                alt={testimonial.position}
                className="recruiters-avatar-image"
              />
            </div>
            <p className="recruiters-position">{testimonial.position}</p>
            <p className="recruiters-testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsNew;
