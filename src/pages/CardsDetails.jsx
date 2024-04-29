import { useLoaderData, useParams } from "react-router-dom";


const CardsDetails = () => {
    const cards = useLoaderData();
    const {_id} = useParams();
    return (
        <div>
            <h2>details:{cards.name}</h2>
           <p></p>
        </div>
    );
};

export default CardsDetails;