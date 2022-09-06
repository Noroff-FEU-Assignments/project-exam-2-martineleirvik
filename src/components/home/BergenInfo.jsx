import { useState } from "react";
import Heading from "../layout/Heading";
import { dataBergen } from "../../constants/dataBergen";
import styled from "styled-components";
import BergenInfoItem from "./BergenInfoItem";

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
        return <BergenInfoItem heading={heading} text={text} id={id} />;
      })}
    </StyledBergenInfo>
  );
}

export default BergenInfo;
const StyledBergenInfo = styled.div`
  margin: 30px 50px;
`;
