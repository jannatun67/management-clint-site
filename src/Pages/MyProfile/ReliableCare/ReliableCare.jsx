import { useContext } from "react";
import Reliable from "../../../assets/Images/Banner/care.jpg";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const ReliableCare = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`py-10  ${theme == "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className=" md:flex md:justify-between md:items-center gap-6 w-11/12 mx-auto pb-14">
        <div className={` md:px-10   ${theme == "light" ? "text-black" : "text-white"}`}>
          <h1 className="text-3xl md:text-6xl font-bold mb-5">Reliable Care. </h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-5">Excellent Service</h2>
          <p className="mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus facilis commodi quia ratione quis culpa illum magnam
            saepe? Aspernatur, deleniti?
          </p>
          <div className="flex justify-between items-center">
           <div className="mb-4  font-semibold">
           <li>Best Environment</li>
            <li>Best Environment</li>
            <li>Best Environment</li>
            <li>Best Environment</li>
           </div>
           <div className="mb-4  font-semibold">
           <li>Best Environment</li>
            <li>Best Environment</li>
            <li>Best Environment</li>
            <li>Best Environment</li>
           </div>
          </div>
        </div>
        <img src={Reliable} alt="" />
      </div>
    </div>
  );
};

export default ReliableCare;
