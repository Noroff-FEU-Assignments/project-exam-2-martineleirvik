import { useNavigate } from "react-router-dom";

function FilterButtons() {
  const navigate = useNavigate();
  const clickAll = () => {
    navigate("/booking");
  };
  const clickHotels = () => {
    navigate("/hotels");
  };
  const clickBb = () => {
    navigate("/bedandbreakfasts");
  };
  const clickGuesthouse = () => {
    navigate("/guesthouses");
  };
  return (
    <div>
      <button onClick={clickAll}>All</button>
      <button onClick={clickHotels}>Hotels</button>
      <button onClick={clickBb}>B&B's</button>
      <button onClick={clickGuesthouse}>Guest Houses</button>
    </div>
  );
}

export default FilterButtons;
