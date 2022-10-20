import { ImFire } from "react-icons/im";
import { FaCity } from "react-icons/fa";
import {
  BsCloudRain,
  BsTreeFill,
  BsCloudLightningRain,
  BsSnow2,
  BsWater,
} from "react-icons/bs";


export const programs = [
    {
      name: "Fire",
      icon: <ImFire className="programIcon" />,
      color: "#ff9470",
    },
    {
      name: "Rain",
      icon: <BsCloudRain className="programIcon" />,
      color: "#54cbc5",
    },
    {
      name: "Forest",
      icon: <BsTreeFill className="programIcon" />,
      color: "#87bd8a",
    },
    {
      name: "City",
      icon: <FaCity className="programIcon" />,
      color: "#6b6c71",
    },
    {
      name: "Storm",
      icon: <BsCloudLightningRain className="programIcon" />,
      color: "#a8a795",
    },
    {
      name: "Snow",
      icon: <BsSnow2 className="programIcon" />,
      color: "#7eccff",
    },
    {
      name: "Sea",
      icon: <BsWater className="programIcon" />,
      color: "#639aff",
    },
  ];