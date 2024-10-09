
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import './JobListings.css';

export default function JobListings() {
    const jobListings = [
        {
            id: 1,
            title: 'Website Developer',
            company: 'Walls Asia Architects & Engineers',
            location: 'Hyderabad, Telangana',
            jobTypes: 'Full-time, Permanent',
            totalWork: '1 year (Preferred)',
            posted: '2 days',
            salary: '₹15,000 - ₹35,650 a month',
            skills: [
                'Web design',
                'Responsive web design',
                'Front-end development',
                'Backend development',
                'Database management',
                'SEO optimization',
            ],
            education: "Bachelor's degree",
            responsibilities: [
                'Maintain accurate records of all incoming and outgoing materials.',
                'Regularly conduct stock audits and reconcile discrepancies.',
                'Implement effective inventory control measures to minimize losses and overstock situations.',
                'Collaborate with the procurement team to ensure timely availability of materials.',
                // Add more responsibilities as needed
            ],
        },
        {
            id: 2,
            title: 'Software Engineer',
            company: 'Tech Solutions Inc.',
            location: 'Bangalore, Karnataka',
            jobTypes: 'Full-time, Remote',
            totalWork: '2 years (Preferred)',
            posted: '1 week',
            salary: '₹20,000 - ₹50,000 a month',
            skills: [
                'JavaScript',
                'React',
                'Node.js',
                'RESTful APIs',
                'Version Control',
            ],
            education: "Bachelor's degree in Computer Science",
            responsibilities: [
                'Develop and maintain web applications.',
                'Collaborate with cross-functional teams to define and design new features.',
                // Add more responsibilities as needed
            ],
        },
        // Additional job listings...
    ];

    const [selectedJobIndex, setSelectedJobIndex] = useState(0); // Default to the first job

    useEffect(() => {
        // Set default job index when the component mounts
        setSelectedJobIndex(0);
    }, []);

    const handleJobClick = (index) => {
        setSelectedJobIndex(index);
    };

    return (
        <div className='joblisting-container'>
            <JobCard 
                jobListings={jobListings} 
                onJobClick={handleJobClick} 
                selectedJobIndex={selectedJobIndex} // Pass selected job index to JobCard
            />
            <JobDescription jobData={jobListings[selectedJobIndex]} />
        </div>
    );
}
