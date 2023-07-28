import { Link } from "react-router-dom";
import load from "../Assets/spinner.gif";
const FormBtn = ({ children, to, type, loading }) => {
  return (
    <button
      to={to}
      type={type}
      className="bg-YellowT  text-center w-full rounded-md flex justify-center items-center gap-2  text-white py-2"
    >
      {loading && <img src={load} width={20} />}
      {children}
    </button>
  );
};

export default FormBtn;
