import { useState } from "react";
import Heading from "../layout/Heading";
import { dataBergen } from "../../constants/dataBergen";
import styled from "styled-components";

// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function BergenInfo() {
  const [show, setShow] = useState(false);
  return (
    <StyledBergenInfo>
      <Heading heading="Why Bergen?" />
      {dataBergen.map((data) => {
        const { heading, text, id } = data;
        return (
          <StyledData>
            <div className="original-text">
              <h2 id="data-heading">{heading}</h2>
              <p onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faChevronDown} />
              </p>
            </div>

            {show ? <p id="data">{text}</p> : null}
          </StyledData>
        );
      })}
    </StyledBergenInfo>
  );
}

export default BergenInfo;
const StyledBergenInfo = styled.div`
  margin: 30px 50px;
`;
const StyledData = styled.div`
  .original-text {
    display: flex;
    justify-content: space-between;
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
