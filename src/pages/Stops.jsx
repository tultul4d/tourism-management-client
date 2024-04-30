import {  useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

// import Swal from "sweetalert2";

const Stops = () => {
    
  
    // const  {_id, name, email, spot_name, country_name, location, short,
    //     cost, seasonality, visitor, photo} = spot;
    const spots = useLoaderData();
    console.log(spots);

   


    // {
    //     spots.map(spot => <SpotCard key={spot._id}  spot={spot}></SpotCard> 

    //      )
    // }

        // const handleDelete = _id =>{
        //     console.log(_id);
        //     Swal.fire({
        //         title: "Are you sure?",
        //         text: "You won't be able to revert this!",
        //         icon: "warning",
        //         showCancelButton: true,
        //         confirmButtonColor: "#3085d6",
        //         cancelButtonColor: "#d33",
        //         confirmButtonText: "Yes, delete it!"
        //       }).then((result) => {
        //         if (result.isConfirmed) {
        //         //   Swal.fire({
        //         //     title: "Deleted!",
        //         //     text: "Your file has been deleted.",
        //         //     icon: "success"
        //         //   });
        
        //        fetch(`http://localhost:5000/spot/${_id}`, {
        //         method: 'DELETE'
                
        //        })
        //        .then(res => res.json())
        //        .then(data => {
        //         console.log(data);
        //         if(data.deletedCount > 0){
        //             Swal.fire({
        //                     title: "Deleted!",
        //                     text: "Your file has been deleted.",
        //                     icon: "success"
        //                   });
        //         }
        //        })
        //         }
        //       });
        //     }
    return (
        <div>
    {
        spots.map(spot => <SpotCard  key={spot._id} spot={spot}></SpotCard>)
    }
   </div>
        // <div>he:{spots.name}</div>
    //     <div className="  bg-base-200 rounded-lg mb-4">
    //     <div className="hero-content flex-col lg:flex-row">
    //       <img src={spots.photo} className="w-[250px] h-[239px] mr-10 rounded-lg " />
    //       <div className="gap-5">
    //           <h1 className="mr-8 mb-2"><span className="font-bold">Country_Name:</span>{country_name}</h1>
    //         <h1 className=" font-mono"> <span className="font-bold">Spot_Name:</span> {spots.spot_name}</h1>
    //         <p className="mt-2"><span className="font-bold">Visitor: </span>{ spots.visitor}</p>
    //         <p className="py-6"></p>
    //         {/* <div className="btn-group btn-group-vertical mb-2 space-y-4 "> */}
    //          {/* <Link > <button className="btn btn-active">View</button></Link>
    //           <Link to={`/updateSpot/${_id}`}><button className="btn">Edit</button></Link> */}
    //           {/* <button
    //           onClick={() => handleDelete(_id)}
    //           className="btn">X</button> */}
      
    //         {/* </div> */}
    //         {/* <Link to={`/cards/${_id}`} >
    //         <button className="btn btn-primary">View Details </button>
           
    //         </Link> */}
    //       </div>
    //     </div>
    //   </div>
    );
};

export default Stops;