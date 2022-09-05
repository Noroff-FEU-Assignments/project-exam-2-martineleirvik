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
              <p id="data-heading">{heading}</p>
              <p onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faChevronDown} />
              </p>
            </div>

            {show ? <p>{text}</p> : null}
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
    #data-heading {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
`;
