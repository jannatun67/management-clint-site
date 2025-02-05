import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyPost = () => {
  // const LoadedPostData = useLoaderData();
  const{user}=useContext(AuthContext)
  

  const[postData,setPostData]=useState([])
  useEffect(()=>{
    axios.get(`https://management-server-site-7.onrender.com/my_posts?email=${user?.email}`,{withCredentials:true})
    .then(res=> setPostData(res.data))
  },[])

  const handelDelete = _id => {
    console.log("Delete", _id);
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
        
        fetch(`https://management-server-site-7.onrender.com/posts/${_id}`,{
          method:'delete'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if ( data.deletedCount > 0) {
            Swal.fire({
          title: "Deleted!",
          text: "Your Data has been deleted.",
          icon: "success"
        });

          const remaining= postData.filter(Data=> Data._id !== _id);
          setPostData(remaining);
          }
        })
      }
    });
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>category</th>
            <th> location</th>
            <th></th>
          </tr>
        </thead>

        {postData?.map((data, index) => ( 
          <tbody key={data._id}>
            {console.log(data?._id,data)}
            {/* row 1 */}
            <tr>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={data?.thumbnail}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{data?.title}</div>
                  </div>
                </div>
              </td>
              <td>{data?.category}</td>
              <td>{data?.location}</td>
              <th className="space-x-4">
                <Link to={`/update/${data?._id}`}>
                  <button className="btn  btn-primary ">Update</button>
                </Link>
                <button
                  onClick={() => handelDelete(data?._id)}
                  className="btn btn-accent "
                >
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyPost;
