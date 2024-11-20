import React, {useState} from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './index.css';
import Navbar from '../Header';
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu, MenuItem } from '@mui/material';
import { Visibility, Edit, Close } from '@mui/icons-material';

const rows = [
    {date:'01-jan-2024', name: 'Senior Python Developer', status: 'closed', views: '30,000', action: 'VIEW APPLICATION(400)' },
    {date:'09-Mar-2024', name: 'Full Stack Developer', status: 'open', views: '20,000', action: 'VIEW APPLICATION(100)' },
    {date:'15-Aug-2024', name: 'Java Developer', status: 'closed', views: '1,000', action: 'VIEW APPLICATION(300)' },
    {date:'02-Sep-2024', name: 'Manual Testing', status: 'open', views: '10,000', action: 'VIEW APPLICATION(100)' },
    {date:'01-jan-2024', name: 'Senior Python Developer', status: 'closed', views: '30,000', action: 'VIEW APPLICATION(400)' },
    {date:'09-Mar-2024', name: 'Full Stack Developer', status: 'open', views: '20,000', action: 'VIEW APPLICATION(100)' },
    {date:'15-Aug-2024', name: 'Java Developer', status: 'closed', views: '1,000', action: 'VIEW APPLICATION(300)' },
    {date:'02-Sep-2024', name: 'Manual Testing', status: 'open', views: '10,000', action: 'VIEW APPLICATION(100)' },
];
let rowsPerPage = 3;

const EmployeeHome = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Get the current rows based on the page number
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  if(rows.length>1){
    let rowsPerPage=3
  }else{
    let rowsPerPage=1
  }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
       
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Navbar />
            <div className='table-cnt' >
                <table>
                    <thead>
                        <tr className='table-head-tr' style={{padding: '10px'}}>
                            <th className='table-head-title'>DATE</th>
                            <th className='table-head-title' style={{marginLeft : '20px'}}>JOB TITLE</th>
                            <th  className='table-head-title'>STATUS</th>
                            <th  className='table-head-title'>TOTAL VIEWS</th>
                            <th  className='table-head-title'>ACTION</th>
                            <th  className='table-head-title'>SHARE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row, index) => (
                            <tr key={index} style={{ backgroundColor: 'white' }} className='body-tr'>
                                <td>{row.date}</td>
                                <td >{row.name}</td>
                                <td >{row.status}</td>
                                <td >{row.views}</td>
                                <td ><span className='view-appliation'>{row.action}</span></td>
                                <td className='icon-cnt'>
                                   <CiLinkedin className='icon'/>
                                   <FaWhatsapp className='icon'/>
                                </td>
                                <td className='dots-data-cnt'>
                                   <button className='dot-btn' onClick={handleClick}>
                                        <BsThreeDotsVertical />
                                    </button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose} style={{ color: '#666666', fontSize: '14px' }}>
                                            <Visibility  style={{ marginRight: 8, fontSize: '16px', color: '#666666' }} /> View Job
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} style={{ color: '#666666', fontSize: '14px' }}>
                                            <Edit  style={{ marginRight: 8, fontSize: '16px', color: '#666666' }} /> Edit Job
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} style={{ color: '#666666', fontSize: '14px' }}>
                                            <Close  style={{ marginRight: 8, fontSize: '16px', color: '#666666' }} /> Close Job
                                        </MenuItem>
                                    </Menu>
                                </td>
                            </tr>
                            

                        ))}
                    </tbody>
                </table>
                <Pagination
                    count={Math.ceil(rows.length / rowsPerPage)} // Total number of pages
                    page={currentPage}
                    onChange={handlePageChange}
                    siblingCount={0} // Show no sibling pages (i.e., show exactly 2 numbers after "Previous")
                    boundaryCount={2} // Show 2 numbers at the boundaries (beginning and end)
                    renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                    )}
                    sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
                />
            </div>
        </div>
    );
};

export default EmployeeHome;
