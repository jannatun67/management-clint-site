import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import team from "../../assets/Images/Banner/team1-.jpg"

const ListOf = () => {
    const{theme}=useContext(AuthContext)
    return (
        <div className={`py-10  ${theme == "light" ? "bg-white" : "bg-gray-900"}`}>
            <div className="w-11/12 mx-auto">
            <div className={` text-center ${theme == "light" ? "text-black" : "text-white"}`}>
                <h1 className="font-semibold text-2xl md:text-4xl mb-3">List Of Our Volunteers</h1>
                <p>Aenean Quis Bibendum Auctor Sagittis Theme Duis Sed odio sit Amet Nibh Vulputate Charity WordPress Themes</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <div className="flex gap-3 items-center mb-6 mt-16">
                    <img className="w-[100px] rounded-full" src={team} alt="" />
                    <div className={`${theme == "light" ? "text-black" : "text-white"}`}>
                        <h2 className="font-semibold text-2xl">Jason Kovalsky</h2>
                        <p>Distinctively simplify equity invested materials after…</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center mb-6 ">
                    <img className="w-[100px] rounded-full" src={team} alt="" />
                    <div className={`${theme == "light" ? "text-black" : "text-white"}`}>
                        <h2 className="font-semibold text-2xl">Jason Kovalsky</h2>
                        <p>Distinctively simplify equity invested materials after…</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img className="w-[100px] rounded-full mb-5" src={team} alt="" />
                    <div className={`${theme == "light" ? "text-black" : "text-white"}`}>
                        <h2 className="font-semibold text-2xl">Jason Kovalsky</h2>
                        <p>Distinctively simplify equity invested materials after…</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img className="w-[100px] rounded-full" src={team} alt="" />
                    <div className={`${theme == "light" ? "text-black" : "text-white"}`}>
                        <h2 className="font-semibold text-2xl">Jason Kovalsky</h2>
                        <p>Distinctively simplify equity invested materials after…</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            </div>
        </div>
    );
};

export default ListOf;