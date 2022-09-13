import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function EnquiryDetail({
  id,
  accommodationName,
  name,
  email,
  message,
  dateTo,
  dateFrom,
}) {
  const [show, setShow] = useState(false);
  return (
    <StyledEnquiry key={id}>
      <div className="message-container">
        <li onClick={() => setShow(!show)}>{accommodationName}</li>
        <p onClick={() => setShow(!show)}>
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </div>

      {show ? (
        <div className="message-expanded">
          <p id="data">Email: {email}</p>
          <p>{message}</p>
        </div>
      ) : null}
    </StyledEnquiry>
  );
}

export default EnquiryDetail;

const StyledEnquiry = styled.div`
  margin: 20px auto;

  .message-container {
    display: flex;
    justify-content: space-between;
    li {
      font-weight: bold;
      cursor: pointer;
    }
    .icon {
      cursor: pointer;
    }
  }
  .message-expanded {
    p {
      margin: 10px 0;
    }
  }
`;
