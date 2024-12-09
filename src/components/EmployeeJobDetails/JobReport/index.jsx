import React,{useState} from 'react'
import Navbar from '../Header';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './index.css'

const jobList=[
    {name:'saibabu@appitsoftware.com', searches : 30, views : 400, downloads :10, emails : 20, access : 10},
    {name:'ishan@appitsoftware.com', searches : 50, views : 800, downloads :20, emails : 70, access : 30},
    {name:'gulab@appitsoftware.com', searches : 10, views : 100, downloads :15, emails : 26, access : 12},
    {name:'preaveen@appitsoftware.com', searches : 23, views : 240, downloads :5, emails : 40, access : 30},
    {name:'harish@appitsoftware.com', searches : 33, views : 440, downloads :40, emails : 40, access : 30},
    {name:'saibabu@appitsoftware.com', searches : 30, views : 400, downloads :10, emails : 20, access : 10},
    {name:'ishan@appitsoftware.com', searches : 50, views : 800, downloads :20, emails : 70, access : 30},
    {name:'gulab@appitsoftware.com', searches : 10, views : 100, downloads :15, emails : 26, access : 12},
    {name:'preaveen@appitsoftware.com', searches : 23, views : 240, downloads :5, emails : 40, access : 30},
    {name:'harish@appitsoftware.com', searches : 33, views : 440, downloads :40, emails : 40, access : 30},
    {name:'saibabu@appitsoftware.com', searches : 30, views : 400, downloads :10, emails : 20, access : 10},
    {name:'ishan@appitsoftware.com', searches : 50, views : 800, downloads :20, emails : 70, access : 30},
    {name:'gulab@appitsoftware.com', searches : 10, views : 100, downloads :15, emails : 26, access : 12},
    {name:'preaveen@appitsoftware.com', searches : 23, views : 240, downloads :5, emails : 40, access : 30},
    {name:'harish@appitsoftware.com', searches : 33, views : 440, downloads :40, emails : 40, access : 30},
    {name:'saibabu@appitsoftware.com', searches : 30, views : 400, downloads :10, emails : 20, access : 10},
    {name:'ishan@appitsoftware.com', searches : 50, views : 800, downloads :20, emails : 70, access : 30},
    {name:'gulab@appitsoftware.com', searches : 10, views : 100, downloads :15, emails : 26, access : 12},
    {name:'preaveen@appitsoftware.com', searches : 23, views : 240, downloads :5, emails : 40, access : 30},
    {name:'harish@appitsoftware.com', searches : 33, views : 440, downloads :40, emails : 40, access : 30},
]

let rowsPerPage = 3;

function Jobreport() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
  
    // Get the current rows based on the page number
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentjobRows = jobList.slice(indexOfFirstRow, indexOfLastRow);
    if(jobList.length>1){
       rowsPerPage=3
    }else{
       rowsPerPage=1
    }
  return (
    <div>
        <Navbar/>
        <div className='jobreport-cnt'>
              <table>
                 <thead>
                    <tr className='resdox-table-head-tr' style={{padding: '10px'}}>
                        <th  className='resdox-table-head-title'>Recruiter name</th>
                        <th  className='resdox-table-head-title'>Searches</th>
                        <th  className='resdox-table-head-title'>CV views</th>
                        <th  className='resdox-table-head-title'>Downloads</th>
                        <th  className='resdox-table-head-title'>Emails</th>
                        <th  className='resdox-table-head-title'>Toal Access</th>
                    </tr>
                 </thead>
                 <tbody>
                    {currentjobRows.map((row, index)=>(
                        <tr key={index} style={{ backgroundColor: 'white' }} className='resdox-body-tr'>
                            <td>{row.name}</td>
                            <td>{row.searches}</td>
                            <td>{row.views}</td>
                            <td>{row.downloads}</td>
                            <td>{row.emails}</td>
                            <td>{row.access}</td>
                        </tr>
                    ))}
                 </tbody>
              </table>
              <Pagination
                count={Math.ceil(jobList.length / rowsPerPage)} // Total number of pages
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
    )
  
}

export default Jobreport