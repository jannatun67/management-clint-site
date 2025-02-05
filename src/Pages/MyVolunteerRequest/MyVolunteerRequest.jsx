import axios from "axios";
import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyVolunteerRequest = () => {
  const {user}=useContext(AuthContext)
 
   const[MyVolunteerData,setMyVolunteerData]=useState([])

   useEffect(()=>{
    axios.get(`https://management-server-site-7.onrender.com/BeVolunteer-Post?email=${user.email}`,{withCredentials:true})
    .then(res=> setMyVolunteerData(res.data))
   },[])

  const handelDelete = _id=>{
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        

        fetch(`https://management-server-site-7.onrender.com/BeVolunteer-Post/${_id}`,{
          method:'delete'
        })

        .then(res=> res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success"
        });
        const remaining= MyVolunteerData.filter(Data=> Data._id !== _id);
        setMyVolunteerData(remaining);
          }
        })
      }
    });
  }
  return (
    <div>
      <h1>My Volunteer Request Post: {MyVolunteerData.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>location</th>
            </tr>
          </thead>
         {
            MyVolunteerData.map((volunteerData ,index)=><tbody key={volunteerData._id}>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>{index+1}</th>
                  <td>{volunteerData?.title}</td>
                  <td>{volunteerData?.category}</td>
                  <td>{volunteerData?.location}</td>
                  <td><button onClick={()=> handelDelete(volunteerData?._id)} className="btn btn-primary">Cancel</button></td>
                </tr>
              </tbody>)
         }
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerRequest;
