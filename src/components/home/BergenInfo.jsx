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
            <h1>{data.heading}</h1>
            <p>{data.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BergenInfo;
