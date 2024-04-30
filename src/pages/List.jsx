// import { useContext, useEffect, useState } from "react";

// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import { useLoaderData } from "react-router-dom";
// import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
const List = () => {
    
    //  const lists = useLoaderData();
    const { user } = useContext(AuthContext);
    const [list, setList] = useState([]);
    console.log(list);
    // const [spots, setSpots] = useState([]);
    useEffect(() => {
        if (user?.email) {
            fetch(`https://tourism-management-server-lovat.vercel.app/spot-email/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    // setSpots(data);
                    setList(data);
                    // console.log(data);

                });
        }


    }, [user]);
    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
    
           fetch(`https://tourism-management-server-lovat.vercel.app/spot/${_id}`, {
            method: 'DELETE'
            
           })
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
            }
           })
            }
          });
        }
    return (


        <div>
            {/* <p>fdgfh:</p> */}
            {

                list?.map(l => {


                    return <div key={l._id}>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>tourists_spot_name</th>
                                        <th>location
</th>
                                        <th>seasonality -</th>
                                        <th>country_Name
</th>
<th>cost</th>
<th>travel_time</th>
<th>image </th>
<th>totalVisitorsPerYear</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold">{l.spot_name}</div>
                                                    <div className="text-sm opacity-50"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {l.
country_name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{l.
visitor}</span>
                                        </td>
                                        <td>{l.
seasonality
}</td>
<td>{l.
country_name
}</td>
<td>{l.cost}</td>
<td>{l.time}</td>
<td>{l.photo}</td>
<td>{l.visitor}</td>
                                        <th>
                                        <Link to={`/updateSpot/${l._id}`}><button className="btn">Update</button></Link>
        <button
        onClick={() => handleDelete(l._id)}
        className="btn">Delete</button>
                                        </th>
                                    </tr>

                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>tourists_spot_name</th>
                                        <th>location
</th>
                                        <th>seasonality -</th>
                                        <th>country_Name
</th>
                                        <th>cost</th>
<th>travel_time</th>
<th>image </th>
<th>totalVisitorsPerYear</th>
                                        <th></th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                    </div>
                })

            }

        </div>
    );
};

export default List;