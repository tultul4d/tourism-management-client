import { useLoaderData } from "react-router-dom";

// {name, email, spot_name, country_name, location, short,
//     cost, seasonality, visitor, photo}


const CardsDetails = () => {
    
  const spots = useLoaderData();
    return (
        <div className="card lg:w-96 bg-slate-200 shadow-xl lg:ml-[400px] mt-4 mb-5">
  <figure className="px-10 pt-10">
    <img src={spots.photo}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{spots.country_name}</h2>
    <p className="font-mono"><span className="text-xl font-semibold">Spot:</span> {spots.spot_name}</p>
    <div className="flex gap-4">
      <h2 className="font-mono">Location: {spots.location}</h2>
      <h1 className="font-mono"><span>Cost:</span>{spots.cost}</h1>
      <h2 className="font-mono"><span>Visitor:</span>{spots.visitor}</h2>
    </div>
    <div>
        <h2><span className="font-serif ml-2">User Name: </span>{spots.name}</h2>
    </div>
    <div>
        <h2><span className="font-serif">User Email: </span>{spots.email}</h2>
    </div>
  </div>
</div>
    );
};

export default CardsDetails;