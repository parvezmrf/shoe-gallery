import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Banner />
      <Products data={data} />
    </>
  );
};

export default Home;
