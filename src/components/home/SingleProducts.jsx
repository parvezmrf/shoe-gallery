import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProducts = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{brand}</div>
          </h2>
          <p>{description.slice(0,50)}</p>
          <p className="font-bold">Price Only ${price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Report</div>
            <div className="badge badge-outline">
             
              <Link to={`/products/${id}`}>See Details</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleProducts;
