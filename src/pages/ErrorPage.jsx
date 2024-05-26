import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  
  const { error, status } = useRouteError();
 

  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
      <h1 className="font-bold text-7xl">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>

      <button className="btn btn-primary mt-8">
        <Link to="/">Homepage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
