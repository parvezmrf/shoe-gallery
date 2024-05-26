const Banner = () => {
  return (
    <div className="hero" style={{backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20220929/pngtree-shoes-promotion-banner-background-image_1466238.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Make your choice</h1>
          <p className="mb-5">
          Take time to think through all the options before making a choice. Its a difficult choice to make. I think we made the right choice in offering the best Shoes.
          </p>
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
