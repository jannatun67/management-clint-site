import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddVolunteer = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    const{user}=useContext(AuthContext)


    const handelAddPost =async e =>{
        e.preventDefault()

        const form = e.target;
        const thumbnail= form.thumbnail.value;
        const title= form.title.value;
        const description= form.description.value;
        const category=form.category.value;
        const location=form.location.value;
        const volunteers_needed= parseInt(form.volunteers_needed.value);
       
        const organizeEmail= form.userEmail.value;

        const deadline = startDate? `${(startDate.getMonth() + 1).toString().padStart(2, '0')}/${startDate
            .getDate()
            .toString()
            .padStart(2, '0')}/${startDate.getFullYear()}`
        : null;

        const formData= {
          thumbnail,
            title,
            description,
            category,
            location,
            volunteers_needed,
            deadline,
             organizeEmail,
           organizeName:user?.displayName
        }
        console.log(deadline);
       
        // make a post request
        try{
          await axios.post(`${import.meta.env.VITE_API_URL}/add-posts`,formData,{withCredentials:true})
          .then(res=> console.log(res.data))
          Swal.fire("Post Added Successful");
        }
        catch (error){
          console.log(error);
        }

    }
  return (
    <div>
      <Helmet>
        <title>Volunteer Management / Add Volunteer</title>
      </Helmet>
      <div className="  md:p-24 p-2 min-h-screen">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-2xl md:text-5xl font-bold mb-5">
            Add volunteer Post
            </h1>
          </div>
          <form onSubmit={handelAddPost}>
            <div className=" md:flex gap-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="thumbnail"
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
                    placeholder="volunteers needed "
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>

            <div className=" md:flex gap-4">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Deadline </span>
                </label>
                <label className="input-group">
                  <DatePicker
                  className='border py-3 px-2 rounded-xl '
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="MM/dd/yyyy" 
                  name="deadline"
                  />
                </label>
              </div>
             <br />
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Organize Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="organizeEmail "
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
          
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Organize Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="userName"
                    placeholder="organizeName"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-block   mt-3 font-bold">Add Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
