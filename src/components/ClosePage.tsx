import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { HOME } from "../constants/Slugs";

const ClosePage = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:flex lg:justify-end">
      <div
        onClick={() => navigate(HOME)}
        className="w-fit p-6 cursor-pointer hover:bg-hoverBg"
      >
        <IoCloseSharp className="text-3xl text-menu" />
      </div>
    </div>
  );
};

export default ClosePage;
