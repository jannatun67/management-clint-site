import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const AllVolunteerCard = ({post}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
          className="w-full h-[200px] object-cover"
            src={post.thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
        <div className="flex justify-between items-center gap-20">
        <h3 className="font-bold text-xl text-gray-500">{post.category}</h3>
        <p className="font-bold text-gray-500">{post.deadline}</p>
        </div>
          
          <div className="card-actions justify-end">
            <Link  to={`/AllDetails/${post._id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllVolunteerCard;