

const images = require.context("../../../../assets/Tophiring", false, /\.(gif|webp)$/);
const companyLogos = images.keys().map(images);

export const topCompaines=[
  
      
        {
          id:1,
          companyName:"Accolite",
          img:companyLogos[0],
          rating:"3.4",
          reviews:"570",
          title:"Digital  transformation services provider",
          color:"rgb(255, 250, 250)"
        },
        {
          id:2,
          companyName:"Atalent Services",
          img:companyLogos[1],
          rating:"3.5",
          reviews:"400",
          title:"We are global leader in egnieering & sciences",
          color:"rgb(242, 254, 244)"
        },
        {
          id:3,
          companyName:"Airtal",
          img:companyLogos[3-1],
          rating:"4.0",
          reviews:"23.7k+",
          title:"Global leader in technology services",
          color:"rgb(255, 250, 250)"
        },
        {
          id:4,
          companyName:"Cognizant",
          img:companyLogos[4-1],
          rating:"3.8",
          reviews:"56.7k+",
          title:"Leading ITES company with global presence",
          color:"rgb(243, 250, 254)"
        },
        {
          id:5,
          companyName:"Fis",
          img:companyLogos[5-1],
          rating:"4.1",
          reviews:"5.7k+",
          title:"FIS is hiring 3 to 10 yrs exp,in C++ & Mumps developer",
          color:"rgb(231, 254, 243)"
        },
        {
          id:6,
          companyName:"Tata Consul....",
          img:companyLogos[6-1],
          rating:"3.5",
          reviews:"83.7k+",
          title:"Exploring challenging and exciting opportunities at TCS",
          color:"rgb(255, 250, 250)"
        },
        {
          id:7,
          companyName:"VXI Global Sol..",
          img:companyLogos[7-1],
          rating:"3.7",
          reviews:"101",
          title:"No. 1 Customer Care Solutions Provider",
          color:"rgb(255, 250, 250)"
        }
]
export const topSkills=[
  {
    skill:"All",
    companyIds:[1,2,3,4,5,6,7]
  },
  {
    skill:"Java",
    companyIds:[6,2,3,4,5]
  },
  {
    skill:"React Js",
    companyIds:[4,6,5,7,1]
  },
  {
    skill:"Spring boot",
    companyIds:[1,2,4,5,7]
  },
  {
    skill:"SAP ABAP",
    companyIds:[2,3,4,5,6]
  }

]