import { useLoaderData } from "react-router-dom";

const EditProduct = () => {




  const loadData = useLoaderData()
  console.log(loadData.title)
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
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center text-5xl">Edit products</h1>
      <div className="my-16"></div>
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
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
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
      </form>
    </div>
  );
};

export default EditProduct;