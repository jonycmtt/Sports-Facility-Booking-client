import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen text-center">
      <h2 className="text-6xl font-bold">404</h2>
      <p className="text-2xl">Page is not found !</p>
      <Link to="/" className="my-5">
        {" "}
        <button className="btn btn-info btn-rounded">Go to home</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
