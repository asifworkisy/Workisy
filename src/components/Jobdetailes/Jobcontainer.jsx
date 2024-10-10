import React from 'react'
import  Filter from "../Jobdetailes/Filter/FilterDropdowndata"
import Joblisting from "../Jobdetailes/JobDeatils/JobListings"
import styles from './Jobcontainer.module.css'; // Import css modules stylesheet as styles

export default function Jobcontainer() {
  return (
    <div className={styles.section}>
      <Filter/>
      <Joblisting/>
    </div>
  )
}
