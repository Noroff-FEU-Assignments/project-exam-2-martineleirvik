import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./BergenInfoItem.styled";

export default function BergenInfoItem({ heading, text, id }) {
  const [show, setShow] = useState(false);

  return (
    <S.StyledData key={id}>
      <S.StyledHeading onClick={() => setShow(!show)}>
        <h2>{heading}</h2>
        <p>
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </S.StyledHeading>

      {show ? <p id="data">{text}</p> : null}
    </S.StyledData>
  );
}
