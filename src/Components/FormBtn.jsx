import { Link } from "react-router-dom";

const FormBtn = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="bg-YellowT block text-center w-full rounded-md text-white py-2"
    >
      {children}
    </Link>
  );
};

export default FormBtn;
