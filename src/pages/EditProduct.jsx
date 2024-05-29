import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const loadData = useLoaderData();
  console.log(loadData.title);

  const idLoad = loadData.id;
  const titleLoad = loadData.title;
  const brandLoad = loadData.brand;
  const priceLoad = loadData.price;
  const descriptionLoad = loadData.description;
  const image_urlLoad = loadData.image_url;

  const handleEdit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const sid = form.sid.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const upData = { sid, title, brand, price, description, image_url };

    if (confirm("Check your data again?")) {
      await fetch(`http://localhost:3000/shoes/${idLoad}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(upData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      toast("Produtc data updated!");
    }
  };

  return (
    <div >
      <ToastContainer />




      {/* You can open the modal using document.getElementById('ID').showModal() method */}

  <div className="modal-box w-11/12 max-w-5xl">
   
  <h1 className="text-center text-5xl">Edit products</h1>

 
  </div>


      <form onSubmit={handleEdit} className=" modal-box w-11/12 max-w-5xl" >
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg text-xl"
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={titleLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg text-xl"
            type="text"
            name="brand"
            placeholder="Brand"
            defaultValue={brandLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg text-xl"
            type="number"
            name="price"
            placeholder="price"
            defaultValue={priceLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg text-xl"
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={descriptionLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg text-xl"
            type="text"
            name="image_url"
            placeholder="Image URL"
            defaultValue={image_urlLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg text-xl"
            type="text"
            name="sid"
            placeholder="ID"
            defaultValue={idLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className=" btn mt-4 w-full "
            type="submit"
            value="Update Product"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
