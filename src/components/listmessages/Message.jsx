import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function Message({ id, name, email, message, createdAt }) {
  const [show, setShow] = useState(false);
  return (
    <StyledMessage key={id}>
      <StyledMessageContainer onClick={() => setShow(!show)}>
        <li>{name}</li>
        <p className="createdAt">{moment(createdAt).calendar()}</p>
        <p className="arrow-down">
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </StyledMessageContainer>

      {show ? (
        <StyledMessageExpanded>
          <p id="data">
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Message:</span> {message}
          </p>
        </StyledMessageExpanded>
      ) : null}
    </StyledMessage>
  );
}

export default Message;

const StyledMessage = styled.div`
  margin: 7px auto;
  padding: 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  li {
    font-weight: bold;
    width: 50%;
    list-style-type: circle;
  }
  .createdAt {
    width: 45%;
  }
  .arrow-down {
    width: 5%;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  } ;
`;

const StyledMessageExpanded = styled.div`
  p {
    margin: 10px 0;
    span {
      font-weight: bold;
    }
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  } ;
`;
