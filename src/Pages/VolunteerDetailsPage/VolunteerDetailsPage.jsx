import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link,  useParams } from "react-router-dom";

const VolunteerDetailsPage = () => {

const [details,setDetails]=useState([])
  const {id} = useParams()
  // console.log(id);
  useEffect(()=>{
    axios.get(`https://management-server-site-7.onrender.com/post/${id}`,{withCredentials:true})
    .then(res=> setDetails(res.data) )
  },[])

  const {
    thumbnail,
    title,
    description,
    category,
    location,
    volunteers_needed,
    deadline
  } = details;
  return (
    <div className="flex justify-center mt-10">
      <Helmet>
        <title>Volunteer Management / Volunteer Details</title>
      </Helmet>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img className="w-[500px]" src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-gray-500">{category}</h3>
            <h4 className="text-xl font-semibold text-gray-500">{location}</h4>
          </div>
          <div className="flex justify-between">
            {volunteers_needed > 0 ? (
              <p>{volunteers_needed}</p>
            ) : (
              <p>Volunteer Not Need</p>
            )}
            <p>{deadline}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/BeVolunteer/${details._id}`}>
              <button
                className="btn btn-primary"
                disabled={volunteers_needed > 0 ?false:true}
              >
               Be a Volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetailsPage;
