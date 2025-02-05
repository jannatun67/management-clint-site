import { useContext, useEffect, useState } from "react";
import AllVolunteerCard from "../../Componentes/AllVolunteerCard/AllVolunteerCard";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const AllVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const { theme } = useContext(AuthContext);
  const [search,SetSearch]= useState("")
  const [grid,setGrid]=useState(true)

  const handelGrid= (value)=>{
    setGrid(value)

  }

  useEffect(() => {
    
    fetch(`https://management-server-site-7.onrender.com/posts?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
 
  }, [search]);
  return (
    <div className={`py-10 ${theme == "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="w-11/12 mx-auto ">
        <Helmet>
          <title>Volunteer Management/All Volunteer</title>
        </Helmet>
        <div
          className="flex justify-between">
           <div className={`flex gap-3 items-center text-3xl ${
            theme == "light" ? "text-black" : "text-white"
          }`}>
          <div onClick={()=>handelGrid(true)} className="cursor-pointer"> <BsFillGrid3X3GapFill /></div>
           <div onClick={()=>handelGrid(false)} className="cursor-pointer"><IoGrid /></div>
           </div>
         <div>
         <h1 className={`md:text-4xl font-bold text-2xl ${
            theme == "light" ? "text-black" : "text-white"
          }`}>All Volunteer</h1>
         </div>
          <div >
            <label className="input input-bordered flex items-center gap-2">
              <input type="text"
              onChange={e=>SetSearch(e.target.value)}
               className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${grid?"lg:grid-cols-3":"lg:grid-cols-2"} gap-3 mt-10`}>
          {posts.map((post) => (
            <AllVolunteerCard key={post._id} post={post}></AllVolunteerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllVolunteer;
