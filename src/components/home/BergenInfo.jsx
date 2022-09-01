import Heading from "../layout/Heading";
import { dataBergen } from "../../constants/dataBergen";

function BergenInfo() {
  return (
    <div className="bergenInfo">
      <Heading heading="Why Bergen?" />
      {dataBergen.map((data) => {
        const { heading, text } = data;
        return (
          <div className="data">
            <h1>{heading}</h1>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BergenInfo;
