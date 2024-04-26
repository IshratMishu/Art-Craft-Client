import CardsData from "../../Pages/CardsData/CardsData";
import ComingSoon from "../../Sections/ComingSoon";
import Pottery from "../../Sections/Pottery";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pottery></Pottery>
            <CardsData></CardsData>
            <ComingSoon></ComingSoon>
        </div>
    );
};

export default Home;