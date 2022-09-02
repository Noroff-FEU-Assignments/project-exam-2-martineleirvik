// components
import Heading from "../components/layout/Heading";
import RenderApi from "../components/booking/RenderApi";
import FilterButtons from "../components/booking/FilterButtons";

function Booking() {
  return (
    <>
      <Heading heading="Booking" />
      <FilterButtons />
      <RenderApi />
      <button>Show more</button>
    </>
  );
}

export default Booking;
