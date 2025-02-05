import Lottie from "lottie-react";
 import groovyWalkAnimation  from "../../assets/Images/Animation - 1735028284118.json"

const ErrorPage = () => {
    return (
        <div>
        <Lottie className="h-96" animationData={groovyWalkAnimation}></Lottie>
        <p className="text-3xl font-bold text-center">Page Not Found</p>
        </div>
    );
};

export default ErrorPage;