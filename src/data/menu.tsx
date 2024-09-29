import { MdDashboard } from "react-icons/md";
import { LuListMusic } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { GoProjectRoadmap } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { ABOUTME, CAPSTONE, HOME, MUSIC, PROJECT } from "../constants/Slugs";

const menuData = [
  {
    id: 1,
    title: "Home",
    slug: HOME,
    icon: MdDashboard,
  },
  {
    id: 2,
    title: "About Me",
    slug: ABOUTME,
    icon: ImProfile,
  },
  {
    id: 3,
    title: "Capstone",
    slug: CAPSTONE,
    icon: GoProjectRoadmap,
  },
  {
    id: 4,
    title: "Project",
    slug: PROJECT,
    icon: FaProjectDiagram,
  },
  {
    id: 5,
    title: "Music",
    slug: MUSIC,
    icon: LuListMusic,
  },
];

export default menuData;
