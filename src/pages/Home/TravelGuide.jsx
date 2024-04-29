
import { MdOutlineTravelExplore } from "react-icons/md";
  
const TravelGuide = () => {
    return (
       
        <div>
            <div className="flex ml-4 mt-5">
              <MdOutlineTravelExplore />
            <h1 className="text-xl font-bold mb-8 -mt-2">Travel Guide</h1>
              </div>
            
            <div className="flex justify-around">
             
        <div className="card card-compact w-[300px] bg-base-100 shadow-xl">
<figure><img src="https://i.ibb.co/bB43St9/park-lake.jpg" alt="Shoes" /></figure>
<div className="card-body">

<h2 className="card-title font-serif">Indonesia Care</h2>
<p>
Indonesia Care could refer to a variety of things depending on the context. It might be a campaign, initiative, or program aimed at providing care and support for Indonesia and its people. </p>


</div>
</div>
<div className="card card-compact w-[300px] bg-base-100 shadow-xl">
<figure><img src="https://i.ibb.co/tXDFshq/traditional-house-architecture.jpg" alt="Shoes" /></figure>
<div className="card-body">

<h2 className="card-title font-serif">E-Passport-and-e-visa</h2>
<p>
The e-passport, also known as a biometric passport, contains an electronic chip that stores the passport holders biometric information, such as fingerprints and facial recognition data, along with other personal details </p>


</div>
</div>
<div className="card card-compact w-[300px] bg-base-100 shadow-xl">
<figure><img src="https://i.ibb.co/nckPkKq/shanghai-rural-village.jpg" alt="Shoes" /></figure>
<div className="card-body">

<h2 className="card-title font-serif">General-informantion</h2>
<p>
Implement robust security measures to protect users personal and sensitive information. This includes encryption protocols, secure payment processing, and adherence to data protection regulations.
 </p>


</div>
</div>
    </div></div>
    );
};

export default TravelGuide;