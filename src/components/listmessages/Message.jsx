import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import * as S from "./Message.styled";

function Message({ id, name, email, message, createdAt }) {
  const [show, setShow] = useState(false);
  return (
    <S.StyledMessage key={id}>
      <S.StyledMessageContainer onClick={() => setShow(!show)}>
        <li>{name}</li>
        <p className="createdAt">{moment(createdAt).calendar()}</p>
        <p className="arrow-down">
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </S.StyledMessageContainer>

      {show ? (
        <S.StyledMessageExpanded>
          <p id="data">
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Message:</span> {message}
          </p>
        </S.StyledMessageExpanded>
      ) : null}
    </S.StyledMessage>
  );
}

export default Message;
