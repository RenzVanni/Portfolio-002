import { IconType } from "react-icons/lib";

export type Projects_Prop = {
  id: number;
  title: string;
  context: string;
  disclaimer?: string;
  hero: string; // Add the 'hero' property
  linksIcon: IconType[]; // Assuming linksIcon is an array of React icons
  link: string[];
  techs: IconType[]; // Assuming techs is an array of React icons
};
export type Project_Map_Prop = {
  item: Projects_Prop;
  index: number;
};
