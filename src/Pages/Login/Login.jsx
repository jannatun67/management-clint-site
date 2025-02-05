import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const navigate= useNavigate()
  const{userLogin, setUser, googleLogin}=useContext(AuthContext)

  const handelLoginSubmit= e =>{
    e.preventDefault()
    const form =e.target;
    const email=form.email.value;
    const password=form.password.value;

    console.log(email,password);

    userLogin(email,password)

    .then((result) => {
     console.log(result.user);
     setUser(userLogin)
     navigate('/')
    })
    .catch((error) => {
      Swal.fire("Please try again");
    });
  }
  // Google
  const handelGoogle = () => {
  
    googleLogin()
      .then(result => {
        console.log(result);
        if(result.user){
          navigate("/")
        };
       
      })
      .catch((error) => {
        Swal.fire("Please try again!");
      });
  };


  return (
    <div>
      <Helmet>
        <title>Volunteer Management / Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-100 md:w-[500px] w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelLoginSubmit} className="card-body">
            <h1 className="md:text-4xl text-2xl font-bold text-center">Login now!</h1>
              <div className="form-control">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p> Dont't Have an Account ? <Link to='/register'><span>Register</span></Link></p>
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

export default Login;
