import { ImFire } from "react-icons/im";
import { FaCity } from "react-icons/fa";
import {
  BsFillCloudRainFill,
  BsTreeFill,
  BsFillCloudLightningRainFill,
  BsSnow2,
  BsWater,
  
} from "react-icons/bs";
import { MdNightsStay } from "react-icons/md";

import fire from "./assets/sounds/fireplace.mp3";
import rain from "./assets/sounds/rain.mp3";
import forest from "./assets/sounds/forest.mp3";
import river from "./assets/sounds/river.mp3";
import city from "./assets/sounds/city.mp3";
import storm from "./assets/sounds/storm.mp3";
import sea from "./assets/sounds/sea.mp3";
import snow from "./assets/sounds/snow.mp3";
import night from "./assets/sounds/summer-night.mp3";

export const programs = [
  {
    name: "Fire",
    icon: <ImFire className="programIcon" />,
    color: "#ff9470",
    soundUrl: fire,
  },
  {
    name: "Rain",
    icon: <BsFillCloudRainFill  className="programIcon" />,
    color: "#54cbc5",
    soundUrl: rain,
  },
  {
    name: "River",
    icon: <BsWater className="programIcon" />,
    color: "#7eccff",
    soundUrl: river,
  },
  {
    name: "Forest",
    icon: <BsTreeFill className="programIcon" />,
    color: "#87bd8a",
    soundUrl: forest,
  },
  {
    name: "City",
    icon: <FaCity className="programIcon" />,
    color: "#6b6c71",
    soundUrl: city,
  },
  {
    name: "Snow",
    icon: <BsSnow2 className="programIcon" />,
    color: "#7eccff",
    soundUrl: snow,
  },
  {
    name: "Storm",
    icon: <BsFillCloudLightningRainFill className="programIcon" />,
    color: "#a8a795",
    soundUrl: storm,
  },
  {
    name: "Sea",
    icon: <BsWater className="programIcon" />,
    color: "#639aff",
    soundUrl: sea,
  },
  {
    name: "Summer Night",
    icon: <MdNightsStay className="programIcon" />,
    color: "#6b6c71",
    soundUrl: night,
  },
];
