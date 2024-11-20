import {useState} from 'react'
import './index.css'
const employee=[
  {id:1, value:"1-14"},
  {id:2, value:"15-49"},
  {id:3, value:"50-100"},
  {id:4, value:"101-200"},
  {id:5, value:"200-500"},
  {id:6, value:"501 and above"}
]
const LoginPage=()=>{
    const [sales, setSales]=useState(false)
    const [login, setLogin]=useState(false)
    const [emailvalue, setEmailvalue]=useState("")
    const [password, setpassword]=useState("")
    const handleloginEmail=(e)=>{
       setEmailvalue(e.target.value)
    }
    
    const handleChagePassowrd=(e)=>{
        setpassword(e.target.value)
    }
    const handleLogin=()=>{
        setLogin(true)
        setSales(false)
    }
    const handleSales=()=>{
        setSales(true)
        setLogin(false)
    }
   
    const renderLoginPage=()=>{
        
       return(
        <div className="login-cnt">
           <div className="login-input-cnt">
               <label className="input-text" htmlFor="email">Email</label>
               <input type="email" className="input" id="email" placeholder="Enter registered email" onChange={handleloginEmail} value={emailvalue}/>
               {emailvalue === "" && (<p className='error-email'>please enter email</p>)}
           </div>
           <div className="login-input-cnt">
               <label className="input-text" htmlFor="password">Password</label>
               <input type="password" className="input" id="password" placeholder="Enter Password" onBlur={handleChagePassowrd} value={password}/>
               {password==="" && <p className='error-email'>Please Enter password</p>}
               <p className="forget-text">Forget password?</p>
              
           </div>
           <button className="login-btn">Login</button>
           <p className="or">Or</p>
           <div style={{display: "flex", alignItems: "center", textAlign: "center", margin: "20px 0"}}>
              <div style={{flex: "1", borderBottom: "1px solid #3B4252"}}></div>
              <span style={{padding: "0 10px", fontSize : "16px"}}>Don’t have a registered email ID?</span>
              <div style={{flex: "1", borderBottom: "1px solid #3B4252"}}></div>
            </div>
            <div className="creat-cnt">
              <button className="creat-btn">Create account</button>
            </div>
        </div>
       )
    }
    const renderSales=()=>{
        return(
            <div className='sales-cnt'>
               <p className='i-para'>I am looking for</p>
               <div className='radio-input-cnt'>
                  <div className='radio-cnt'>
                     <input type='radio'id="radio1"/>
                     <label htmlFor='radio1' className='radio-label'>Recruitment solution</label>
                  </div>
                  <div className='radio-cnt'>
                     <input type='radio'id="radio1"/>
                     <label htmlFor='radio1' className='radio-label'>job opportunities</label>
                  </div>
               </div>
               <div className='sales-inp-cnt'>
                 <input type='text' className='name-input' placeholder='Name'/>
               </div>
               <div className='sales-inp-cnt'>
                 <input type='text' className='name-input' placeholder='Contact number'/>
               </div>
               <div className='radio-input-cnt con'>
                  <div className='radio-cnt'>
                     <input type='radio'id="radio1"/>
                     <label htmlFor='radio1' className='radio-label'>Company</label>
                  </div>
                  <div className='radio-cnt'>
                     <input type='radio'id="radio1"/>
                     <label htmlFor='radio1' className='radio-label'>Consult</label>
                  </div>
               </div>
               <div className='sales-inp-cnt'>
                 <input type='text' className='name-input' placeholder='Company/consultancy name'/>
               </div>
               <div className='sales-inp-cnt'>
                 <select className='name-input'>
                    {employee.map(each=>(
                        <option key={each.id} value={each.value}>{each.value}</option>
                    ))}
                 </select>
               </div>
               <div className='sales-inp-cnt'>
                 <input type='email' className='name-input' placeholder='email Id'/>
               </div>
               <div className='sales-inp-cnt'>
                 <input type='text' className='name-input' placeholder='city'/>
               </div>
               <button className='login-btn callback'>Get a callback</button>
            </div>
        )
    }
    return(
        <div className="login-app-container">
            <div className="login-img-cnt">
                <img src="https://i.pinimg.com/564x/55/92/d3/5592d36c450bcf881cea45c15c9f8ceb.jpg" className="login-img" alt="login img"/>
            </div>
            
            <form className="form-cnt">
                    <div className="login-head-cnt">
                        <h4 className={`head-text ${sales ? "clickliginhead": ""}`} onClick={handleSales}>Sales enquiry</h4>
                        <h4 className={`head-text ${login ? "clickliginhead": ""}`} onClick={handleLogin}> Login/Register</h4>
                    </div>
                    <hr className="hr-line"/>
                    <div>
                        {sales && (renderSales())}
                       {!sales && (renderLoginPage())}
                    </div>
            </form>
            
        </div>
    )
}
export default LoginPage