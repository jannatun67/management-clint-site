import { Helmet } from "react-helmet-async";
import Banner from "../../Componentes/Banner/Banner";
import VolunteerNeeds from "../../Componentes/VolunteerNeeds/VolunteerNeeds";
import ReliableCare from "../MyProfile/ReliableCare/ReliableCare";
import ListOf from "../../Componentes/ListOf/ListOf";


const HomePage = () => {
    return (
        <div>
          <Helmet>
            <title>Volunteer Management / Home</title>
          </Helmet>
          <Banner></Banner>
          <VolunteerNeeds></VolunteerNeeds>
          <ReliableCare></ReliableCare>
          <ListOf></ListOf>
        </div>
    );
};

export default HomePage;