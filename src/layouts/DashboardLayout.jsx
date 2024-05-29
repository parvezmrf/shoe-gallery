import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 menu menu-horizontal bg-base-200 rounded-box mt-6">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <ul>
          <li className=" p-4  m-1 text w-full">
            <Link to="./">Dashboard</Link>
          </li>
          <li className="p-4 m-1 text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className=" p-4 m-1 text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className=" p-4 m-1 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;