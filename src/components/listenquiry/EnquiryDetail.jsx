import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import * as S from "./EnquiryDetail.styled";

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
    <S.StyledEnquiry key={id}>
      <S.StyledEnquiryContainer onClick={() => setShow(!show)}>
        <li>{accommodationName}</li>
        <p className="createdAt">{moment(createdAt).calendar()}</p>
        <p className="arrow-down">
          <FontAwesomeIcon
            className="icon"
            icon={show ? faChevronLeft : faChevronDown}
          />
        </p>
      </S.StyledEnquiryContainer>

      {show ? (
        <S.StyledEnquiryExpanded>
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
        </S.StyledEnquiryExpanded>
      ) : null}
    </S.StyledEnquiry>
  );
}

export default EnquiryDetail;
