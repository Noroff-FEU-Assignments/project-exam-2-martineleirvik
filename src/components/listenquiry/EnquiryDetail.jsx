import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function EnquiryDetail({
  id,
  accommodationName,
  name,
  email,
  message,
  dateTo,
  dateFrom,
  createdAt,
}) {
  const [show, setShow] = useState(false);
  return (
    <StyledEnquiry key={id}>
      <StyledEnquiryContainer onClick={() => setShow(!show)}>
        <li>{accommodationName}</li>
        <p className="createdAt">{moment(createdAt).calendar()}</p>
        <p className="arrow-down">
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </StyledEnquiryContainer>

      {show ? (
        <StyledEnquiryExpanded>
          <p>
            <span>Name:</span> {name}
          </p>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Message:</span> {message}
          </p>
          <div className="date">
            <p>
              <span>Date from:</span> {dateFrom}
            </p>
            <p id="last">
              <span>Date to:</span> {dateTo}
            </p>
          </div>
        </StyledEnquiryExpanded>
      ) : null}
    </StyledEnquiry>
  );
}

export default EnquiryDetail;

const StyledEnquiry = styled.div`
  margin: 7px auto;
  padding: 4px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const StyledEnquiryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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

const StyledEnquiryExpanded = styled.div`
  p {
    margin: 10px 0;
    span {
      font-weight: bold;
    }
  }
  .date {
    display: flex;
    #last {
      margin-left: 20px;
    }
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    .date {
      flex-direction: column;
      #last {
        margin: 0;
      }
    }
  } ;
`;
