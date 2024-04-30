// import { useLoaderData } from "react-router-dom";


import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SpotCard = ({spot}) => {
    const  {_id, name, email, spot_name, country_name, location, short,
        cost, seasonality, visitor, photo,time} = spot;
    // const cards = useLoaderData();

    // const handleDelete = _id =>{
    // console.log(_id);
    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //     //   Swal.fire({
    //     //     title: "Deleted!",
    //     //     text: "Your file has been deleted.",
    //     //     icon: "success"
    //     //   });

    //    fetch(`https://tourism-management-server-lovat.vercel.app/spot/${_id}`, {
    //     method: 'DELETE'
        
    //    })
    //    .then(res => res.json())
    //    .then(data => {
    //     console.log(data);
    //     if(data.deletedCount > 0){
    //         Swal.fire({
    //                 title: "Deleted!",
    //                 text: "Your file has been deleted.",
    //                 icon: "success"
    //               });
    //     }
    //    })
    //     }
    //   });
    // }
    return (
        <div className="  bg-base-200 rounded-lg mb-4">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="w-[250px] h-[239px] mr-10 rounded-lg " />
    <div className="gap-5">
        <h1 className="mr-8 mb-2"><span className="font-bold">Country_Name:</span>{country_name}</h1>
      <h1 className=" font-mono"> <span className="font-bold">Spot_Name:</span> {spot_name}</h1>
      <p className="mt-2"><span className="font-bold">Visitor: </span>{visitor}</p>
      <p>{cost}</p>
      <p>{seasonality}</p>
      <p>{visitor}</p>
      <p>{time}</p>
      <p className="py-6"></p>
      <div className="btn-group btn-group-vertical mb-2 space-y-4 ">
       <Link > <button className="btn btn-active">View</button></Link>
        {/* <Link to={`/updateSpot/${_id}`}><button className="btn">Edit</button></Link>
        <button
        onClick={() => handleDelete(_id)}
        className="btn">X</button> */}

      </div>
      <Link to={`/cards/${_id}`} >
      <button className="btn bg-teal-600" id="tooltip">View Details </button>
     
      </Link>
    </div>
  </div>
</div>
    );
};

export default SpotCard;