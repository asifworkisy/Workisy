import React from 'react';
import { Link } from 'react-router-dom';
import styles from './content.module.css'; 

export default function Content() {
  return (
    <div className={styles.content}> 
      <Link className={styles.link} to="/buy-online">Buy Online</Link>
      <Link className={styles.link} >Naukari Hiring Suite</Link> {/* Added a to attribute */}
      <Link className={styles.link} to="/employee-home">Employer Login</Link>
      <Link className={styles.link} to="/super-admin">Super Admin</Link>
    </div>
  );
}
