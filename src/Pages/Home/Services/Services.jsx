// import { useEffect } from "react";
// import { useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
// DRY---> do not repeat yourself
  const [asc,setAsc] = useState(true);
  const [search,setSearch] = useState('');
  // const [min,setMin] = useState(undefined)
  const services = useServices(asc,search);//jehetu akhan theke qpi cle kori nai tai asc parameter pathaici,useservice recive korbe



  // const [services, setServices] = useState([]);

  // useEffect(() => {
  
  //   fetch(`http://localhost:5000/services?sort=${asc?'asc' : 'des'}&search=${search}`) //query evabe kore
  
  
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const handleSearch = e =>{
    e.preventDefault()
    const searchText = e.target.search.value;
    
    // console.log(searchText)
    setSearch(searchText)
  }




  return (
    <div className="mt-4">
      <div className="text-center ">
        <h3 className="text-orange-600 text-2xl font-bold">Services</h3>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>

        <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        <input type="submit" value="search" className="btn btn-ghost" />
        </form>


        <button 
          className="btn btn-secondary mt-5"
          onClick={()=>setAsc(!asc)}
          >
           
          {asc ? 'Price: Low to High' : 'Price: High to Low'}
        </button>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
          {services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
       
      </div>
    </div>
  );
};

export default Services;
