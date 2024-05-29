import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const SingleProdutcCardDashboard = ({ shoe, onDelete, tst }) => {
  const { id, title, brand, price } = shoe;

  const handleDlete = async () => {
    if (confirm("Are you sure to delete")) {
      await fetch(`http://localhost:3000/shoes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      onDelete(id);
      tst();
    }
  };

  return (
    <tr>
      <th>{id} </th>
      <td>{title}</td>
      <td>{brand}</td>
      <td> ${price} </td>
      <td>
        <button className="btn btn-sm">
          <Link to={`/dashboard/edit-products/${id}`}>Edit</Link>
        </button>
        <button className="btn btn-sm bg-red-500 text-white  mx-2">
          <div className="lg:tooltip" data-tip="Action can't be undone">
            <Link onClick={handleDlete}>Delete</Link>
          </div>
        </button>
        <button className="btn btn-sm btn-success">
          <Link to={`/products/${id}`}>Details</Link>
        </button>
      </td>

    </tr>
  );
};

export default SingleProdutcCardDashboard;
