import { Link } from "react-router-dom";

//components
import Heading from "../layout/Heading";
import RenderApi from "./RenderPopularApi";
//styles

function PopularHotels() {
  return (
    <div className="popular-container">
      <Heading heading="Popular Hotels" />
      <RenderApi />
    </div>
  );
}

export default PopularHotels;
