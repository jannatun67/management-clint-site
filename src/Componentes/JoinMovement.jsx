
import Lottie from 'lottie-react';
import { useContext } from 'react';
import groovyWalkAnimation from"../assets/Images/groovyWalkAnimation.json"

import { AuthContext } from '../AuthProvider/AuthProvider';

const JoinMovement = () => {
     const { theme } = useContext(AuthContext);
    return (
        <section className={`relative py-16 px-8 ${theme === "light" ? "bg-white" : "bg-gray-900"} `}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className={` ${
                theme === "light" ? "text-black" : "text-white"
              }`}>
                <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
                <p className="text-lg mb-6">
                    Become a part of a vibrant community that values your voice. Connect, share, and grow with
                    us.
                </p>
                </div>
                    <button className = "btn-primary btn" >
                     Add Queries
                    </button>
            </div>
            <div className="relative">
                <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-lg">
                    <Lottie className='h-72' animationData={groovyWalkAnimation} loop={true} />;
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent opacity-50 rounded-md"></div>
            </div>
        </div>
    </section>
    );
};

export default JoinMovement;