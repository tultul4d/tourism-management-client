// import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";


const SpotCard = ({spot}) => {
    const  {_id, name, email, spot_name, country_name, location, short,
        cost, seasonality, visitor, photo} = spot;
    // const cards = useLoaderData();
    return (
        <div className="  bg-base-200 rounded-lg mb-4">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="w-[250px] h-[239px] mr-10 rounded-lg " />
    <div className="gap-5">
        <h1 className="mr-8 mb-2"><span className="font-bold">Country_Name:</span>{country_name}</h1>
      <h1 className=" font-mono"> <span className="font-bold">Spot_Name:</span> {spot_name}</h1>
      <p className="mt-2"><span className="font-bold">Visitor: </span>{visitor}</p>
      <p className="py-6"></p>
      <Link to={`/cards/${_id}`}>
      <button className="btn btn-primary">View Details </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default SpotCard;