export const toGetAllData=[
    {id:1,name:"Saibabu",location:"Hyderabad",education:"Computer Science, (Btech)",graduationYear:"2019-2023",skills:["Java","Sql","Javascript"],experience:"1",Gender:"M"},
    {id:2,name:"Rohit sharma",location:"Mumbai",education:"accounting and finance, Bachelor of Commerce (B.Com) ",graduationYear:"2020-2023",skills:["Javascript"],experience:"4",Gender:"M"},
    {id:3,name:"Ms dhoni",location:"Chennai",education:"Automotive, Master of Technology (M.Tech)",graduationYear:"2019-2021",skills:["Javascript"],experience:"2",Gender:"M"},
    {id:4,name:"Virat kohli",location:"Hyderabad",education:"Computer Science, B.Tech",graduationYear:"2020-2024",skills:["Html","CSS"],experience:"1",Gender:"M"},
    {id:5,name:"Rishab pant",location:"Delhi",education:"Automotive, Master of Technology (M.Tech) ",graduationYear:"2019-2021",skills:["Python","React"],experience:"1",Gender:"M"},
    {id:6,name:"Jahnavi",location:"Mumbai",education:"Computer Science,(Btech)",graduationYear:"2012-16",skills:["Python"],experience:"10",Gender:"F"},
    {id:7,name:"Hardhik Pandya",location:"Mumbai",education:"DECS, Master of Technology (M.Tech)",graduationYear:"2013-2015",skills:["Javascript"],experience:"9",Gender:"M"},
    {id:8,name:"Samantha",location:"Delhi",education:"DECS, Master of Technology (M.Tech)",graduationYear:"2016-2020",skills:["Javascript","Hibernate"],experience:"9",Gender:"F"},
]
export const options=
    {
        location:[...new Set(toGetAllData.map((i)=>i.location))],
        skill:["Java","Javascript","Spring mvc","Spring jdbc","Hibernate","spring data jpa","React"],
        background:["Btech","MBA","BBA","Commerce","M.tech"],
        year:["2024","2023","2022","below 2021"]
    }




