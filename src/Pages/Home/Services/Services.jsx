// import { useEffect } from "react";
// import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
// DRY---> do not repeat yourself
  const services = useServices();



  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

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
