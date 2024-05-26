/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import SingleProducts from "./SingleProducts";

const Products = ({data}) => {
  // console.log(data)
  return (
    <div className="my-8">
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
      <div className="flex gap-2 flex-wrap justify-center">
      {
      data.map(shoe=> <SingleProducts key={shoe.id} shoe={shoe}  /> )
      }
      </div>
    </div>
  );
};

export default Products;
