import { Link } from "react-router-dom";

//components
import Heading from "../layout/Heading";
import RenderPopularApi from "./RenderPopularApi";
//styles

function PopularHotels() {
  return (
    <div className="popular-container">
      <Heading heading="Popular Hotels" />
      <RenderPopularApi />
    </div>
  );
}

export default PopularHotels;
