import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const navigate= useNavigate()
const{createUser,setUser,googleLogin}=useContext(AuthContext)

  const handelRegister= e =>{
   e.preventDefault()
   const form =e.target;
    const email=form.email.value;
    const password=form.password.value;
    const name=form.name.value;
    const photo=form.photo.value

    console.log(email,password);

    createUser(email,password,name,photo)
    .then(result=>{
      console.log(result.user);
      setUser(createUser)
      e.target.reset()
      navigate("/")
    })
    .catch(error=>{
       Swal.fire("Please try again");
    })
  }
  // Google
  
  const handelGoogle =()=>{
    googleLogin()
    .then(result=>{
      console.log(result.user)
      navigate('/')
    })
    .catch(error=>{
      Swal.fire("Please try again!");
    })
  }


    return (
        <div>
          <Helmet>
            <title>Volunteer Management / Register</title>
          </Helmet>
           <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-100 w-[500px]  max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelRegister} className="card-body">
            <h1 className="md:text-4xl text-2xl font-bold text-center">Register now!</h1>
              {/* name */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* photo Url */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>  Allready Have an Accoun? <Link to='/login'><span>Login</span></Link></p>
              <div className="flex justify-center mt-4 btn">
                <button onClick={handelGoogle} className="flex items-center gap-2"><FaGoogle /> Login With Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;