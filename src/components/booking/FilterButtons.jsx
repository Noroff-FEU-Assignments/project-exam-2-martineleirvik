import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <StyledFilterbuttons>
      <button onClick={clickAll}>All</button>
      <button onClick={clickHotels}>Hotels</button>
      <button onClick={clickBb}>B&B's</button>
      <button onClick={clickGuesthouse}>Guest Houses</button>
    </StyledFilterbuttons>
  );
}

export default FilterButtons;

const StyledFilterbuttons = styled.div`
  margin: 0 40px;
  button {
    margin: 2px;
    :hover {
      background-color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.secondaryColor};
      cursor: pointer;
    }
  }
`;
