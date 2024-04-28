

const AddedSpot = () => {

    const handleAddSport = event => {
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


        const addSpot = {name, email, spot_name, country_name, location, short,
        cost, seasonality, visitor, photo}
        console.log(addSpot);
        

    }
    return (
        <div className="bg-[#FAF3F0] p-24">
             <h1>Add a Touris sport</h1>
             <form onSubmit={handleAddSport}>
                {/* form name and email row  */}
                <div className="md:flex lg:flex flex-1">
                <div className="form-control md:w-1/2
                    ">
                        <label className="label">
                            <span className="label-text">User Name</span>
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

                            <input type="text" name="spot_name" placeholder="Tourists_spot_name" id="" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2
                    ">
                        <label className="label">
                            <span className="label-text">Country_Name
</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="country_name" placeholder="Country_Name" id="" className="input input-bordered w-full" />
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

                            <input type="text" name="location" placeholder="Location" id="" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2
                    ">
                        <label className="label">
                            <span className="label-text">Short Description
</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="short" placeholder="Short Description" id="" className="input input-bordered w-full" />
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

                            <input type="text" name="cost" placeholder="Average_cost" id="" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2
                    ">
                        <label className="label">
                            <span className="label-text">Seasonality - Like Summer, Winter
</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="seasonality" placeholder="Seasonality - Like Summer, Winter" id="" className="input input-bordered w-full" />
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

                            <input type="text" name="time" placeholder="Travel_Time" id="" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2
                    ">
                        <label className="label">
                            <span className="label-text">TotaLVisitorsPerYear
</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="visitor" placeholder="TotalVisitorsPerYear" id="" className="input input-bordered w-full" />
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

                            <input type="text" name="photo" placeholder="Photo URL" id="" className="input input-bordered w-full" />
                        </label>

                    </div>
                    
                    
                </div>
                
                <input type="submit" value=" add spot " className="btn btn-block"  />

             </form>
        </div>
    );
};

export default AddedSpot;