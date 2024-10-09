import React, { useState } from 'react';
import { MdOutlineHome } from "react-icons/md";
import { FiCode } from "react-icons/fi";
import { MdOutlineBrush } from "react-icons/md";
import { SiAdobeillustrator } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

// Freelancing job categories
const freelancingJobsByType = {
  development: [
    { icon: FiCode, name: "Web Development" },
    { icon: FiCode, name: "Mobile App Development" },
    { icon: FiCode, name: "Software Development" }
  ],
  design: [
    { icon: MdOutlineBrush, name: "Graphic Design" },
    { icon: SiAdobeillustrator, name: "Illustration" },
    { icon: MdOutlineBrush, name: "UI/UX Design" }
  ],
  marketing: [
    { icon: MdOutlineHome, name: "SEO Specialist" },
    { icon: MdOutlineHome, name: "Social Media Management" },
    { icon: MdOutlineHome, name: "Content Marketing" }
  ],
  management: [
    { icon: FaProjectDiagram, name: "Project Management" },
    { icon: FaProjectDiagram, name: "Business Consulting" },
    { icon: FaProjectDiagram, name: "Virtual Assistant" }
  ]
};

export default function FreelancingJobs() {
  const [category, setCategory] = useState("development");

  // Dynamically access the jobs from the selected category
  const jobs = freelancingJobsByType[category];

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="development">Development</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
        <option value="management">Management</option>
      </select>

      <div>
        {jobs.map((job, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <job.icon style={{ marginRight: '10px' }} />
            {job.name}
          </div>
        ))}
      </div>
    </div>
  );
}
