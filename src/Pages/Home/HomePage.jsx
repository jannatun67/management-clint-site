import { Helmet } from "react-helmet-async";
import Banner from "../../Componentes/Banner/Banner";
import VolunteerNeeds from "../../Componentes/VolunteerNeeds/VolunteerNeeds";
import ReliableCare from "../MyProfile/ReliableCare/ReliableCare";
import ListOf from "../../Componentes/ListOf/ListOf";
import JoinMovement from "../../Componentes/JoinMovement";
import HeroStats from "../../Componentes/HeroStats";
import SuccessStories from "../../Componentes/SuccessStories";
import UpcomingEvents from "../../Componentes/UpcomingEvents";
import FAQSection from "../../Componentes/FAQSection";


const HomePage = () => {
    return (
        <div>
          <Helmet>
            <title>Volunteer Management / Home</title>
          </Helmet>
          <Banner></Banner>
          <HeroStats></HeroStats>
          <VolunteerNeeds></VolunteerNeeds>
          <SuccessStories></SuccessStories>
          <UpcomingEvents></UpcomingEvents>
          <ReliableCare></ReliableCare>
          <ListOf></ListOf>
          <JoinMovement></JoinMovement>
          <FAQSection></FAQSection>
        </div>
    );
};

export default HomePage;