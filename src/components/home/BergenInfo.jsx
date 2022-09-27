import Heading from "../layout/Heading";
import { dataBergen } from "../../constants/dataBergen";
import BergenInfoItem from "./BergenInfoItem";
import { StyledBergenInfo } from "./BergenInfo.styled";

function BergenInfo() {
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
