import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateSpot = () => {
    const handleUpdateSport = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const spot_name  = form.spot_name .value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short = form.short.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const visitor = form.visitor.value;
        const photo = form.photo.value;
        const time = form.time.value;


        const addSpot = {name, email, spot_name, country_name, location, short,
        cost, seasonality, visitor, photo,time }
        console.log(addSpot);
        

        // send data to the server 
        fetch(`https://tourism-management-server-lovat.vercel.app/spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User UpdateAdded Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    const spot = useLoaderData();
    console.log(spot);
  
    return (
        <div className="bg-[#FAF3F0] p-24">
        <h1>Add a Touris sport</h1>
        <form onSubmit={handleUpdateSport}>
           {/* form name and email row  */}
           <div className="md:flex lg:flex flex-1">
           <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Update Name</span>
                   </label>
                   <label className="input-group"> 

                       <input type="text" name="name" placeholder="User Name" id="" className="input input-bordered w-full" />
                   </label>

               </div>
               <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">User Email
</span>
                   </label>
                   <label className="input-group">

                       <input type="text" name="email" placeholder="User Email" id="" className="input input-bordered w-full" />
                   </label>

               </div>
           </div>
           {/* form tourists_spot_name and country_Name row  */}
           <div className="md:flex lg:flex flex-1">
           <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Tourists_spot_name</span>
                   </label>
                   <label className="input-group"> 

                       <input type="text" name="spot_name" placeholder="Tourists_spot_name" defaultValue={spot.spot_name} id="" className="input input-bordered w-full" />
                   </label>

               </div>
               <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Country_Name
</span>
                   </label>
                   <label className="input-group">

                       <input type="text" name="country_name" defaultValue={spot.country_name} placeholder="Country_Name" id="" className="input input-bordered w-full" />
                   </label>

               </div>
           </div>
           {/* form location and short description  row  */}
           <div className="md:flex lg:flex flex-1">
           <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Location</span>
                   </label>
                   <label className="input-group"> 

                       <input type="text" name="location" placeholder="Location" defaultValue={spot.location} id="" className="input input-bordered w-full" />
                   </label>

               </div>
               <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Short Description
</span>
                   </label>
                   <label className="input-group">

                       <input type="text" name="short" placeholder="Short Description" defaultValue={spot.short} id="" className="input input-bordered w-full" />
                   </label>

               </div>
           </div>{/* form average_cost  and seasonality - like summer, winter
row  */}
           <div className="md:flex lg:flex flex-1">
           <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Average_cost</span>
                   </label>
                   <label className="input-group"> 

                       <input type="text" name="cost" placeholder="Average_cost" defaultValue={spot.cost} id="" className="input input-bordered w-full" />
                   </label>

               </div>
               <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Seasonality - Like Summer, Winter
</span>
                   </label>
                   <label className="input-group">

                       <input type="text" name="seasonality" placeholder="Seasonality - Like Summer, Winter" defaultValue={spot.seasonality} id="" className="input input-bordered w-full" />
                   </label>

               </div>
           </div>{/* form travel_time => like- 7 day and  totaVisitorsPerYear => like- 10000 row  */}
           <div className="md:flex lg:flex flex-1">
           <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">Travel_Time</span>
                   </label>
                   <label className="input-group"> 

                       <input type="text" name="time" placeholder="Travel_Time" defaultValue={spot.time} id="" className="input input-bordered w-full" />
                   </label>

               </div>
               <div className="form-control md:w-1/2
               ">
                   <label className="label">
                       <span className="label-text">TotaLVisitorsPerYear
</span>
                   </label>
                   <label className="input-group">

                       <input type="text" name="visitor" placeholder="TotalVisitorsPerYear" defaultValue={spot.visitor} id="" className="input input-bordered w-full" />
                   </label>

               </div>
           </div>
           {/* form photo url and add button row  */}
           <div className=" ">
           <div className="form-control w-full  
               ">
                   <label className="label">
                       <span className="label-text">Photo URL</span>
                   </label>
                   <label className="input-group"> 

                       <input type="text" name="photo" placeholder="Photo URL" defaultValue={spot.photo} id="" className="input input-bordered w-full" />
                   </label>

               </div>
               
               
           </div>
           
           <input type="submit" value=" Update " className="btn btn-block"  />

        </form>
   </div>
    );
};

export default UpdateSpot;