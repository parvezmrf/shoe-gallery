import { useLoaderData } from "react-router-dom";

const EditProduct = () => {




  const loadData = useLoaderData()
  console.log(loadData.title)
  
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

    console.log(upData, "kahini")

    await fetch(`http://localhost:3000/shoes/${idLoad}`,{
      method:"PATCH",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(upData),
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))

  };

  return (
    <div>
      <h1 className="text-center text-5xl">Edit products</h1>
      <div className="my-16"></div>
      <form onSubmit={handleEdit}>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={titleLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
            type="text"
            name="brand"
            placeholder="Brand"
            defaultValue={brandLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
            type="number"
            name="price"
            placeholder="price"
            defaultValue={priceLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={descriptionLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
            type="text"
            name="image_url"
            placeholder="Image URL"
            defaultValue={image_urlLoad}
          />
        </div>
        <div className="mt-2">
          <input
            className="bg-gray-200 p-4 w-full border-black rounded-lg"
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
