

const Banner = () => {
      return (
            <div>
                  <div className="carousel w-full max-h-screen">
                        <div id="slide1" className="carousel-item relative w-full">
                              <img src="https://i.ibb.co/58kSLst/01.jpg" className="w-full" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                              <img src="https://i.ibb.co/y556mYq/03.jpg" className="w-full" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                              <img src="https://i.ibb.co/mbSc29S/02.png" className="w-full" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                              <img src="https://i.ibb.co/y556mYq/03.jpg" className="w-full" />
                              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;