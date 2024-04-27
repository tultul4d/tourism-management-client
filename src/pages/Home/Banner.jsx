

const Banner = () => {
    return (
        
            <div className="carousel   rounded-lg mt-5 lg:w-full lg:h-[400px] md:h-[300px] lg:ml-0 md:ml-0 ml-10  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/QMV2mS9/asian-women-sitting-boat-tunnel-from-nypa-fruticans-palm-tree-surat-thani-thailand.jpg" className=" w-full]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative ">
    <img src="https://i.ibb.co/cJqkSqq/painting-mountain-lake-with-mountain-background.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/DDnrdwy/wooden-bridge-mangrove-forest.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/J7gq0YK/sunset-with-silhoutte-birds-flying.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
       
    );
};

export default Banner;