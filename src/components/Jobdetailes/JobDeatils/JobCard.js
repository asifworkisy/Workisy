 import React from 'react';
import styles from './JobCard.module.css'; // Import the CSS Module

const JobCard = ({ jobListings, onJobClick, selectedJobIndex }) => {
    return (
        <div className={styles.jobCardsContainer}>
            {jobListings.map((job, index) => (
                <div 
                    className={`${styles.card} ${selectedJobIndex === index ? styles.cardSelected : ''}`} // Apply selected class
                    key={job.id} 
                    onClick={() => onJobClick(index)} // Click handler to select job
                >
                    <h3 className={styles.cardTitle}>{job.title}</h3>
                    <p className={styles.cardText}>{job.company}</p>
                    <p className={styles.cardText}>{job.location}</p>
                    <ul className={styles.cardList}>
                        <li className={styles.cardListItem}>Job Types: {job.jobTypes}</li> {/* Always visible */}
                        <li className={styles.cardListItem}>Total Work: {job.totalWork}</li> {/* Always visible */}
                    </ul>
                    <p className={styles.cardPosted}>Posted {job.posted} ago</p>
                </div>
            ))}
        </div>
    );
};

export default JobCard;
