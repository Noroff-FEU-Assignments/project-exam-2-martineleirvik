import { useState } from "react";
import Heading from "../layout/Heading";
import { dataBergen } from "../../constants/dataBergen";
import styled from "styled-components";
import BergenInfoItem from "./BergenInfoItem";

function BergenInfo() {
  const [show, setShow] = useState(false);
  return (
    <StyledBergenInfo>
      <Heading heading="Why Bergen?" />
      {dataBergen.map((data) => {
        const { heading, text, id } = data;
        return (
          <BergenInfoItem key={id} heading={heading} text={text} id={id} />
        );
      })}
    </StyledBergenInfo>
  );
}

export default BergenInfo;
const StyledBergenInfo = styled.div`
  margin: 30px 50px;
`;
