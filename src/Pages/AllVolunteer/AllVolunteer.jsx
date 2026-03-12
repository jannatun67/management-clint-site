import { useContext, useEffect, useState } from "react";
import AllVolunteerCard from "../../Componentes/AllVolunteerCard/AllVolunteerCard";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoGrid } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import axios from "axios";
import { DotLoader } from "react-spinners";

const AllVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const { theme } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  const handleGrid = (value) => setGrid(value);
  const handleSortChange = (e) => setSortOption(e.target.value);

  useEffect(() => {
    setLoading(true);

    // Proxy enabled API call
    axios
      .get(`/api/posts?search=${search}`)
      .then((res) => {
        setPosts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setPosts([]);
        setLoading(false);
      });
  }, [search]);

  // Sorting logic
  let sortedPosts = [...posts];
  if (sortOption === "deadline") {
    sortedPosts.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  return (
    <div className={`py-10 ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="w-11/12 mx-auto">
        <Helmet>
          <title>Volunteer Management | All Volunteer</title>
        </Helmet>

        <div className="md:flex md:justify-between">
          <div className="flex justify-between mb-5 w-full md:w-auto">
            <div
              className={`flex gap-3 items-center text-3xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              <div onClick={() => handleGrid(true)} className="cursor-pointer">
                <BsFillGrid3X3GapFill />
              </div>
              <div onClick={() => handleGrid(false)} className="cursor-pointer">
                <IoGrid />
              </div>
            </div>
            <div>
              <h1
                className={`md:text-4xl font-bold text-2xl ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                All Volunteer
              </h1>
            </div>
          </div>

          <div className="md:flex justify-center gap-4 mt-4 md:mt-0">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border rounded p-2 w-full mb-4 md:mb-0"
            >
              <option value="">Sort By</option>
              <option value="deadline">Deadline</option>
            </select>

            <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="grow p-2"
                placeholder="Search"
              />
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

        {/* Content */}
        {loading ? (
          <div className="flex justify-center my-10">
            <DotLoader />
          </div>
        ) : sortedPosts.length > 0 ? (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              grid ? "lg:grid-cols-3" : "lg:grid-cols-2"
            } gap-3 mt-10`}
          >
            {sortedPosts.map((post) => (
              <AllVolunteerCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center mt-10 text-gray-500">No posts found</p>
        )}
      </div>
    </div>
  );
};

export default AllVolunteer;