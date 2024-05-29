import { useEffect, useState } from "react";
import SingleProdutcCardDashboard from "../components/dashboard/SingleProdutcCardDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  function tst() {
    toast.success("successfully deleted");
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProducts = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>

      <ToastContainer autoClose={1000} hideProgressBar={true} theme="colored" />
      <h1 className="text-5xl font-bold text-center">
        All Products
        <p className="text-xl">You have total {products.length} products.</p>
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th> Admn Action Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((shoe) => (
              <SingleProdutcCardDashboard
                key={shoe.id}
                shoe={shoe}
                onDelete={handleDeleteProducts}
                tst={tst}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
