import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SpotCard from "../SpotCard";
import CardTitels from "../CardTitels";


const Home = () => {

    const sports = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <CardTitels></CardTitels>
            <div className=""><h2>sfgsfgshjf: {sports.length}</h2>
            <h2>{sports.photo}</h2>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 ">
            {
                sports.map(spot => <SpotCard
                 key={spot._id} spot={spot}>

                </SpotCard>)
            }
            </div>
            
            
            </div>
        </div>

    );
};

export default Home;