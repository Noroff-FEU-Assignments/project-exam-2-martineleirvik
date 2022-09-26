import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BergenInfoItem({ heading, text, id }) {
  const [show, setShow] = useState(false);

  return (
    <StyledData key={id}>
      <div className="original-text" onClick={() => setShow(!show)}>
        <h2>{heading}</h2>
        <p>
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </div>

      {show ? <p id="data">{text}</p> : null}
    </StyledData>
  );
}

const StyledData = styled.div`
  max-width: 800px;
  margin: 0 auto;
  .original-text {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    h2 {
      font-size: 1.2rem;
      font-weight: normal;
      margin: 10px 0;
    }
  }
  #data {
    font-size: 0.8rem;
  }
`;
