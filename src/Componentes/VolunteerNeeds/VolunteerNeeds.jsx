import { useContext, useEffect, useState } from "react";
import VolunteerNeedsCard from "../VolunteerNeedsCard/VolunteerNeedsCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { DotLoader } from "react-spinners";

const VolunteerNeeds = () => {
  const { theme } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://management-server-site-7.onrender.com/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className={`py-10  ${theme == "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="w-11/12 mx-auto mt-10 mb-10">
        <h1
          className={`text-center md:text-4xl  text-2xl font-bold ${
            theme == "light" ? "text-black" : "text-white"
          }`}
        >
          {" "}
          Volunteer Needs{" "}
        </h1>
        {posts ?(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
            {posts.map((post) => (
              <VolunteerNeedsCard key={post._id} post={post} />
            ))}
          </div>
        ):(
          <div className="flex justify-center my-10">
            <DotLoader />
          </div>
        ) }

        <div className="flex justify-center mt-7">
          <Link to="AllVolunteer">
            <button className="btn btn-primary">
              <FaArrowRightLong /> See all button
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeeds;
