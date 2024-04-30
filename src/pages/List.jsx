// import { useContext, useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import { useLoaderData } from "react-router-dom";
// import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
const List = () => {
    //  const lists = useLoaderData();
    const {user} = useContext(AuthContext);
    const [list, setList] = useState([]);
    console.log(list);
    // const [spots, setSpots] = useState([]);
    useEffect(() => {
        if(user?. email){
            fetch(`http://localhost:5000/spot-email/${user?.email}`)
            .then((res) => res.json())
        .then((data) => {
            // setSpots(data);
            setList(data);
            // console.log(data);

        });
        }
       
        
    }, [user]);
    return (
       

        <div>
            <p>fdgfh: {list.spot_name}</p>
            {
                
                 list?.map(l =>{
                    

                  <div>
                        <h1>{l.spot_name}</h1>
                    </div>
                })
                
            }
            
        </div>
    );
};

export default List;