

import React, { useState } from 'react';
import { FaSuitcase, FaMoneyBillAlt, FaClock, FaDotCircle, FaRegLightbulb, FaBookOpen } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import './JobDescription.css';

const JobDescription = ({ jobData }) => {
    const [showMore, setShowMore] = useState(false);

    // Toggle function to show more or less skills
    const toggleSkills = () => {
        setShowMore(!showMore);
    };

    // Determine which skills to show
    const skillsToShow = showMore ? jobData.skills : jobData.skills.slice(0, 3);

    return (
        <div className="job-listing-container">
            <div className="job-header">
                <h1>{jobData.title}</h1>
                <h2>{jobData.company}</h2>
                <p><FaLocationDot style={{ marginRight: '8px' }} /> {jobData.location}</p>
                <p><FaMoneyBillAlt style={{ marginRight: '8px' }} /> {jobData.salary}</p>
                <button className="apply-button">Apply now</button>
            </div>

            <div className="job-scrollbar">
                <div className="profile-insights">
                    <h3 className="profile-insights-title">Profile Insights</h3>
                    <p className="profile-insights-text">Here's how the job qualifications align with your profile.</p>
                    
                    <div className="skills">
                    <h4 className='skills-title'> <FaRegLightbulb style={{marginRight: '8px'}}/>  Skills</h4>
                        <div className="skills-list-container">
                            {skillsToShow.map((skill, index) => (
                                <div className="skills-list" key={index}>
                                    {skill}
                                </div>
                            ))}
                            <button className="toggle-button" onClick={toggleSkills}>
                            {showMore ? '- Show Less' : '+ Show More'}
                        </button>
                        </div>
                        
                    </div>

                    <div className="education">
                        <h4 className='eduction-title'> <FaBookOpen style={{marginRight: '8px'}}/> Education</h4>
                        <p> {jobData.education}</p>
                            {/* <FaCheckCircle style={{ marginRight: '8px', color: '#2557a7' }} />  */}
                    </div>

                    <div className="location">
                        <h4>Location</h4>
                        <p><FaLocationDot style={{ marginRight: '8px' }} /> {jobData.location}</p>
                    </div>
                </div>

                <div className="job-details">
                    <h3>Job Details</h3>
                    <h4 className="job-details-pay"><FaMoneyBillAlt /> Pay</h4>
                    <p>{jobData.salary}</p>
                    <h4 className="job-details-type"><FaSuitcase /> Job Type</h4>
                    <p>{jobData.jobTypes}</p>
                    <h4 className="job-details-schedule"><FaClock /> Shift and Schedule</h4>
                    <p>{jobData.shift || 'Not specified'}</p>
                </div>

                <div className="benefits">
                    <h3>Benefits</h3>
                    <ul>
                        {jobData.benefits && jobData.benefits.length > 0 ? (
                            jobData.benefits.map((benefit, index) => (
                                <li key={index}><FaDotCircle /> {benefit}</li>
                            ))
                        ) : (
                            <li>No benefits listed</li>
                        )}
                    </ul>
                </div>

                <div className="full-job-description">
                    <h3>Full Job Description</h3>
                    <p>Responsibilities of candidates include:</p>
                    <ul>
                        {jobData.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                    <p>Job Types: {jobData.jobTypes}</p>
                </div>
            </div>
        </div>
    );
};

export default JobDescription;
