import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const BeVolunteerPage = () => {
  const { id } = useParams();
  const [BeVolunteer, setBeVolunteer] = useState([]);
  const navigate = useNavigate;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://management-server-site-7.onrender.com/post/${id}`, {
        withCredentials: true
      })
      .then((res) => setBeVolunteer(res.data));
  }, []);

  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    volunteers_needed,
    deadline,
    organizeEmail,
    organizeName
  } = BeVolunteer;

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const deadline = form.deadline.value;
    const user_email = form.userEmail.value;
    const user_name = form.userName.value;
    const suggestion = form.suggestion.value;
    const requested = form.requested.value;
    const volunteers_needed = parseInt(form.volunteers_needed.value);

    const requestVolunteer = {
      thumbnail,
      title,
      description,
      category,
      location,
      deadline,
      volunteers_needed,
      user_email,
      user_name,
      suggestion,
      requested,
      organizeEmail,
      organizeName,
      post_id: _id
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/BeVolunteer`,
        requestVolunteer
      );
      Swal.fire("Post Added Successful");
      navigate("/MyVolunteerRequest");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Volunteer Management / Be a Volunteer</title>
      </Helmet>
      <div className="  md:p-24 p-2 min-h-screen">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-2xl md:text-5xl font-bold mb-5">
              Be A Volunteer
            </h1>
          </div>
          <form onSubmit={handelSubmit}>
            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="thumbnail"
                    defaultValue={thumbnail}
                    readOnly
                    placeholder="Photo-Url"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Post Title </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    readOnly
                    placeholder="Post Title "
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    readOnly
                    placeholder="description"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <select
                    name="category"
                    value={category}
                    readOnly
                    className="border w-full py-3 px-3 rounded-xl"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Social Service">Social Service</option>
                    <option value="Animal Welfare">Animal Welfare</option>
                  </select>
                </label>
              </div>
            </div>

            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <label className="input-group">
                  <input
                    name="location"
                    value={location}
                    readOnly
                    placeholder="Location"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">No. of volunteers needed</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="volunteers_needed"
                    value={volunteers_needed}
                    readOnly
                    placeholder="volunteers needed "
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Deadline </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="deadline"
                  value={deadline}
                  readOnly
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <br />

            <div className="flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="User email "
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name "
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Organize email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="organize_email"
                    placeholder="Organize_Email"
                    defaultValue={organizeEmail}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Organize name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="organize_name"
                    placeholder="Organize_Name "
                    defaultValue={organizeName}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Requested</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="requested"
                  placeholder="requested "
                  Value="requested"
                  readOnly
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <textarea
                name="suggestion"
                id=""
                cols=""
                rows="10"
                placeholder="suggestion"
                className="border w-full mt-7 p-3 rounded-xl"
              ></textarea>
            </div>

            <button className="btn btn-block   mt-3 font-bold">Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeVolunteerPage;
