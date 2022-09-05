import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <StyledFooter>
      <div className="icons">
        <FontAwesomeIcon icons={faStar} />
      </div>
      <div className="copyright">Copyright 2022 Holidaze</div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.footer};
  padding: 50px 0;
  .copyright {
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`;
