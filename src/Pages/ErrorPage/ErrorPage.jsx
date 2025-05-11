import Lottie from "lottie-react";
 import groovyWalkAnimation  from "../../assets/Images/Animation - 1735028284118.json"
 import {  Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
         <Link to="/"><button className="btn ml-10 my-6">Home</button></Link>
         
        <Lottie className="h-96" animationData={groovyWalkAnimation}></Lottie>
        <p className="text-3xl font-bold text-center mb-9">Page Not Found</p>
        </div>
    );
};

export default ErrorPage;