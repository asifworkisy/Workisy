
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
            company: 'Tech Solutions Pvt Ltd',
            location: 'Bengaluru, Karnataka',
            jobTypes: 'Full-time, Contract',
            totalWork: '2 years (Preferred)',
            posted: '5 days',
            salary: '₹40,000 - ₹60,000 a month',
            skills: [
                'JavaScript',
                'React.js',
                'Node.js',
                'Database management',
                'API development',
                'Version control (Git)',
            ],
            education: "Bachelor's degree in Computer Science",
            responsibilities: [
                'Develop and maintain web applications using modern technologies.',
                'Collaborate with cross-functional teams to define and implement features.',
                'Optimize application performance and troubleshoot issues.',
                'Write clean, maintainable code and conduct code reviews.',
                // Add more responsibilities as needed
            ],
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            company: 'Creative Minds Studio',
            location: 'Mumbai, Maharashtra',
            jobTypes: 'Full-time, Permanent',
            totalWork: '3 years (Preferred)',
            posted: '1 week',
            salary: '₹25,000 - ₹45,000 a month',
            skills: [
                'UI/UX design',
                'Prototyping',
                'Adobe XD',
                'Figma',
                'User research',
                'Wireframing',
            ],
            education: "Bachelor's degree in Design or equivalent",
            responsibilities: [
                'Create intuitive and visually appealing user interfaces.',
                'Conduct user research and usability testing.',
                'Collaborate with developers to implement design solutions.',
                'Develop wireframes, prototypes, and high-fidelity mockups.',
                // Add more responsibilities as needed
            ],
        },
        {
            id: 4,
            title: 'Data Analyst',
            company: 'Insight Analytics',
            location: 'Pune, Maharashtra',
            jobTypes: 'Full-time, Permanent',
            totalWork: '2-4 years (Preferred)',
            posted: '3 days',
            salary: '₹35,000 - ₹55,000 a month',
            skills: [
                'Data analysis',
                'SQL',
                'Python',
                'Data visualization',
                'Statistical modeling',
                'Machine learning',
            ],
            education: "Bachelor's degree in Statistics, Mathematics, or related field",
            responsibilities: [
                'Analyze large datasets to extract actionable insights.',
                'Collaborate with stakeholders to identify business needs and solutions.',
                'Prepare and present reports on findings to the team and management.',
                'Create dashboards and visualizations to track key metrics.',
                // Add more responsibilities as needed
            ],
        },
        {
            id: 5,
            title: 'Network Administrator',
            company: 'Global IT Solutions',
            location: 'Chennai, Tamil Nadu',
            jobTypes: 'Full-time, Permanent',
            totalWork: '5 years (Preferred)',
            posted: '6 days',
            salary: '₹50,000 - ₹75,000 a month',
            skills: [
                'Network management',
                'Server administration',
                'Firewall configuration',
                'Troubleshooting',
                'Cybersecurity',
                'Cloud infrastructure',
            ],
            education: "Bachelor's degree in IT or relevant field",
            responsibilities: [
                'Monitor and maintain network infrastructure to ensure optimal performance.',
                'Implement network security measures to protect against threats.',
                'Troubleshoot network issues and resolve problems promptly.',
                'Collaborate with IT teams to support network-related projects.',
                // Add more responsibilities as needed
            ],
        },        
        {
            id: 6,
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
