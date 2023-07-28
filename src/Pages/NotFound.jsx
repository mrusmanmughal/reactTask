import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center h flex   flex-col  gap-5 justify-center items-center">
      <div className=" text-4xl">Page Not Found 404</div>
      <div>
        <Link to="/" className="bg-GreenT px-3 py-2 rounded text-white">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
