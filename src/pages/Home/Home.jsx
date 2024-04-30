import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SpotCard from "../SpotCard";
import CardTitels from "../CardTitels";
import TravelGuide from "./TravelGuide";
import Animasion from "./Animasion";



const Home = () => {

    const sports = useLoaderData();
    return (
        <div>
           
            <Banner></Banner>
            <CardTitels></CardTitels>
            <div className="">
            <h2>{sports.photo}</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 ">
            {
                sports.map(spot => <SpotCard
                 key={spot._id} spot={spot}>

                </SpotCard>)
            }
            </div>
            <TravelGuide></TravelGuide>
           <Animasion></Animasion>
            
            
            </div>
        </div>

    );
};

export default Home;