

const Animasion = () => {
    return (
        <div>
            <h2 className="font-semibold text-2xl mt-5">Popular Categories</h2>
            <div className=" lg:flex justify-between">
             <div>
                <img className="rounded-2xl w-[200px]" src="https://i.ibb.co/FqS4rgY/jet-dela-cruz-0-Iu-Dr-Kg-K1-Fo-unsplash.jpg" alt="" />
                <p className="font-mono">Flight</p>
             </div>
             <div>
                <img  className="rounded-2xl w-[300px]"  src="https://i.ibb.co/hcBYN1h/library-of-congress-WTT9yr-HHu-Gs-unsplash.jpg" alt="" />
                <p className="font-mono">Hotels</p>
             </div>
             <div>
                <img  className="rounded-2xl w-[300px]"  src="https://i.ibb.co/Vxhd9Bk/dave-lastovskiy-Ryg-Id-Tavhk-Q-unsplash.jpg" alt="" />
                <p className="font-mono">Event</p>
             </div>
             
            </div>
        </div>
    );
};

export default Animasion;
