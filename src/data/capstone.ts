import { FaPhp } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const data = {
  title:
    "ONLINE INFORMATION MANAGEMENT SYSTEM FOR BRGY. ZONE IV, DASMARINAS CITY, CAVITE",
  devs: [
    {
      name: "Renz Vanni M. Bato",
      role: "Developer",
      image: "/profile/profile.jpg",
    },
    { name: "Rodwin C. Homeres", role: "Developer" },
    {
      name: "Gonzalo John I. Itulid",
      role: "Project Manager",
    },
    { name: "Ivan O. Javier", role: "UI Designer" },
  ],
  context:
    "The Online Information Management System (OIMS) project aims to improve the record-keeping process in Barangay Zone IV. The barangay currently uses a combination of paper-based and electronic systems, which is inefficient and costly. OIMS will develop a new system that is both accurate and cost-effective by streamlining the process of gathering and organizing resident information. This will reduce the risk of data inaccuracy and ensure that all information is recorded.",
  tech: [FaPhp, SiXampp, FaHtml5, FaCss3Alt, RiJavascriptLine],
  hero: "/thumbnail/capstone.png",
};

export default data;
