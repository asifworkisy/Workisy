import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosSearch } from "react-icons/io";
import './index.css' 
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome Plus icon
import Select from 'react-select';
import  Creatable  from 'react-select/creatable';
import  Navbar from '../Header'

const experince=[
    {id:1, exp :"0 Months"},
    {id:2, exp :"3 Months"},
    {id:3, exp :"6 Months"},
    {id:4, exp :"1 Year"},
    {id:5, exp :"2 Year"},
    {id:6, exp :"3 Year"},
    {id:7, exp :"4 Year"},
    {id:8, exp :"5 Year"},
    {id:9, exp :"6 Year"},
    {id:10, exp :"7 Year"},
    {id:11, exp :"8 Year"},
    {id:12, exp :"9 Year"},
    {id:13, exp :"10 Year"},
    {id:14, exp :"11 Year"},
    {id:15, exp :"12 Year"},
    {id:16, exp :"13 Year"},
    {id:17, exp :"14 Year"},
    {id:18, exp :"15 Year"},
    {id:19, exp :"16 Year"},
    {id:20, exp :"17 Year"},
    {id:21, exp :"18 Year"},
    {id:22, exp :"19+ Year"}

]

const salary=[
    {id:1, salary :"1 lakh"},
    {id:2, salary :"2 lakh"},
    {id:3, salary :"3 lakh"},
    {id:4, salary :"4 lakh"},
    {id:5, salary :"5 lakh"},
    {id:6, salary :"6 lakh"},
    {id:7, salary :"7 lakh"},
    {id:8, salary :"8 lakh"},
    {id:9, salary :"9 lakh"},
    {id:10, salary :"10 lakh"}

]

const educationLevels = [
    { id: 1, level: "10th pass" },
    { id: 2, level: "12th pass" },
    { id: 3, level: "Diploma" },
    { id: 4, level: "Graduate" },
    { id: 5, level: "Post Graduate" }
];

const activeDays=[
    { id: 1, active: "1 day" },
    { id: 2, active: "1 week" },
    { id: 2, active: "2 weeks" },
    { id: 3, active: "1 months" },
    { id: 4, active: "2 months" },
    { id: 5, active: "3 months" },
    { id: 6, active: "6 months" }
]

const keyword=[
    {value: "Python",label: "python"},
    {value: "Java",label: "java"},
    {value: "C++", label: "cpp" },
    {value: "JavaScript",label: "javascript"},
    { value: "TypeScript",label: "typescript" },
    {value: "Ruby",label: "ruby" },
    {value: "Swift",label: "swift" },
    {value: "C#",label: "csharp"},
    {value: "PHP", label: "php" },
    {value: "Go",  label: "go" },
    {value: "Rust", label: "rust" },
    { value: "Kotlin",  label: "kotlin" },
    {value: "SQL",  label: "sql"   },
    {value: "R",  label: "r" },
    { value: "Perl",label: "perl" },
    { value: "Shell", label: "shell"  },
    { value: "Dart",  label: "dart" },
    { value: "Scala", label: "scala" },
    { value: "Haskell", label: "haskell"},
    { value: "Lua",  label: "lua" },
    { value: "Objective-C", label: "objectivec"},
    {  value: "Groovy", label: "groovy" },
    {value: "VBScript",  label: "vbscript"  },
    { value: "ActionScript", label: "actionscript" },
    { value: "Fortran", label: "fortran" },
    { value: "Ada", label: "ada" },
    {value: "F#",label: "fsharp" },
    { value: "ML",label: "ml" },
    {value: "Erlang",label: "erlang"},
    {value: "Smalltalk",label: "smalltalk" },
   {value: "OCaml",label: "ocaml" },
   {value: "Html",label: "html" },
   {value: "Css",label: "css" },
   {value: "React",label: "react.js" },
   {value: "Node.js",label: "node.js" },
   {value: "Express",label: "express.js" }

  ]

const SearchForm=()=>{
   const [activeId, setActiveId]=useState(null) 
   const [selectedOption, setSelectedOption] = useState(null);
   const [keyWord, setKeyword]=useState([])

   const  handleIconClick=(id)=>{
    setActiveId(prevId=>(prevId===id ? null : id))

   }
   const handleChange = (selected) => {
    setSelectedOption(selected);
  };
   
  const jobhandleCeateKeywords=(inputValue)=>{
     const newkeyword={value : inputValue, label : inputValue}
     setKeyword((prevKeys)=>[...prevKeys, newkeyword])
     setSelectedOption((prevValue)=>[...prevValue, newkeyword]);
    

  } 
  
  return(
    <>
        <Navbar/>
        <div className="search-form-app-cnt">
        <form className="search-form-cnt">
            <div className="exper-cnt">
                <h1 className="heading">Searching for</h1>
                <div className="search-checkbox-input-cnt">
                    <div className="input-label-cnt">
                        <input type="checkbox" id="checkbox" className="checkbox-inp"/>
                        <label className="checkbox-name" htmlFor="checkbox">Freshers only</label>
                    </div>
                    <div className="input-label-cnt">
                        <input type="checkbox" id="checkbox" className="checkbox-inp"/>
                        <label className="checkbox-name" htmlFor="checkbox">Experienced only</label>
                    </div>
                    <div className="input-label-cnt">
                        <input type="checkbox" id="checkbox" className="checkbox-inp"/>
                        <label className="checkbox-name" htmlFor="checkbox">Any</label>
                    </div>
                </div>
            </div>
            <hr className="hr-line"/>
            <div className="exper-cnt">
                <h1 className="heading">Keywords</h1> 
                <Creatable
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleChange}
                    onCreateOption={jobhandleCeateKeywords}
                    isMulti
                    options={keyword}
                    isClearable // Allows clearing the selected value
                    placeholder="Select an option..."
                  
                />
            </div>
            <div className="exper-cnt">
                <h1 className="heading">Current city</h1> 
                <input type="search" className="input" placeholder="Type to search city"/> 
            </div>
            <div className="exper-cnt">
                <h1 className="heading">Experience</h1> 
                <div className="exp-select-cnt">
                    <select placeholder="Minimum Experience" className="select-input">
                        <option value="" disabled>Minimum Experience </option>
                        {experince.map(each=>(
                            <option value={each.exp}>{each.exp}</option>
                        ))}
                    </select> 
                    <select placeholder="Minimum Experience" className="select-input">
                    <option value="" disabled>Maximum Experience </option>
                        {experince.map(each=>(
                            <option value={each.exp}>{each.exp}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="exper-cnt">
                <h1 className="heading">Annual Salary</h1> 
                <div className="exp-select-cnt">
                    <select placeholder="Minimum Experience" className="select-input">
                    <option value="" disabled>Min. salary in lakhs </option>
                        {salary.map(each=>(
                            <option value={each.salary}>{each.salary}</option>
                        ))}
                    </select> 
                    <select placeholder="Minimum Experience" className="select-input">
                    <option value="" disabled>Max. salary in lakhs </option>
                        {salary.map(each=>(
                            <option value={each.salary}>{each.salary}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="">
                <h1 className="heading" style={{marginLeft: "10px"}}>Minimum Education</h1>
                <ul className="edu-list-cnt">
                    {educationLevels.map(each=>(
                    <li className={`list-item ${activeId===each.id ? "click-edu" :""}`} key={each.id}>
                        <p className="edu-para">{each.level}</p>
                        <div
                            className="icons-cnt"
                            onClick={() => handleIconClick(each.id)} // Toggle state on click
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} // Basic styling
                            >
                            {activeId===each.id ? (
                                <FontAwesomeIcon icon={faXmark} style={{ fontSize: '20px', color: '#656eec', marginRight:'5px' }} />
                            ) : (
                                <FontAwesomeIcon icon={faPlus} style={{ fontSize: '20px', color: '#494646',  marginRight:'5px'}} /> // Font Awesome Plus
                            )}
                        </div>

                    </li>
                    ))}
                </ul>
            </div>
            <hr className="hr-line"/>
            <div className='bottom-cnt'>
                <div className='active-cnt'>
                    <label className='activein-para'>Active in</label>
                    <select className='select-active'>
                        { 
                            activeDays.map(each=>(
                            <option key={each.id} value={each.active}>{each.active}</option>
                            ))
                        }
                    </select>
                </div>
                <button className='reset-btn'>Reset</button>
                <div className='search-candi-cnt'>
                    <p className='bott-search-para'>Search Candidates</p>
                    <IoIosSearch style={{marginLeft : "4px", color: '#ffffff'}} size={17}/>

                </div>
            </div>
        </form>
        </div>
    </>    
    
  )
}
export default SearchForm