import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddProducts = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    if (confirm("All input field are corected?")) {
      await fetch("http://localhost:3000/shoes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
        
      toast("Product added successfully");
      document.getElementById("my_modal_1").close();
    }
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <ToastContainer />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full max-w-5xl">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-200 p-4 w-full border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-200 p-4 w-full border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-200 p-4 w-full border-black rounded-lg"
                type="number"
                name="price"
                placeholder="price"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-200 p-4 w-full border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-200 p-4 w-full border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
            <div className="mt-2 lg:tooltip w-full" data-tip="hello">
              <input              
                className="bg-gray-200 p-4 w-full  border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>
            <div className="mt-2">
              <input
                className=" btn mt-4 w-full "
                type="submit"
                value="Add Product"
              />
            </div>
            <div className="mt-2">
              <input
                className=" btn btn-error mt-4 w-full "
                type="button"
                value="Cancel"
                onClick={()=>document.getElementById('my_modal_1').close()}
              />
            </div>
          </form>
        </div>
      </dialog>

      <h1 className="text-center text-5xl">You can add your product.</h1>
      <h2 className="text-center text-5xl">
        <button
          className="btn btn-outline "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add Your product
        </button>
      </h2>

      <div className="my-16"></div>
    </div>
  );
};

export default AddProducts;
