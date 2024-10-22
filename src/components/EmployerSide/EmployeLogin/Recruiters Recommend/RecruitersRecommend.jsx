import React from "react";
import "./RecruitersRecommend.css";
// src/components/Testimonials.jsx

const testimonials = [
  {
    name: "Kripanidhi Sahu",
    position: "Corporate HR Manager ITC Limited",
    text: "We are pleased with the services and co-operation extended by Workisy. The speed of your response to our concerns and queries is highly appreciable. Please extend our deepest gratitude to the entire team.",
  },
  {
    name: "Dr.(Comdt.) J S Sareen (Retd.)",
    position: "Senior General Manager (HR) Simplex Infrastructures Ltd",
    text: "We use Workisy Resdex extensively for closing our hiring requirements. The intelligent search engine in Resdex helps us filter out the most relevant profiles with ease. Database of jobseekers in Workisy is updated and active.",
  },
  {
    name: "Debendranath Dash",
    position: "Chief Manager-Human Resources Srei Equipment Finance Limited",
    text: "We use Workisy Resdex extensively for closing our hiring requirements. The intelligent search engine in Resdex helps us filter out the most relevant profiles with ease. Database of jobseekers in Workisy is updated and active.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-text">
        <h4 className="section-tag">SUCCESS STORIES</h4>
        <h1 className="main-heading">
          Recruiters Recommend Workisy Job Posting Portal
        </h1>
        <p className="description1">
          Workisy is used as the main tool for talent acquisition by lacs of
          recruiters across all kinds and sizes of industry. They appreciate
          Workisys services and highly recommend it as the one-stop solution to
          all the hiring needs of a company.
        </p>
      </div>

      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="avatar-placeholder"></div>
            <h3>{testimonial.name}</h3>
            <p className="position">{testimonial.position}</p>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
