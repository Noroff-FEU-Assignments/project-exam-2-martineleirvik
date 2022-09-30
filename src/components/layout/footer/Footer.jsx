import * as S from "./Footer.styled";
import facebook from "../../../images/facebook.png";
import instagram2 from "../../../images/instagram2.png";
import youtube2 from "../../../images/youtube2.png";
import twitter from "../../../images/twitter.png";

function Footer() {
  return (
    <S.StyledFooter>
      <S.StyledIcons>
        <img src={facebook} />
        <img src={instagram2} />
        <img src={youtube2} />
        <img src={twitter} />
      </S.StyledIcons>
      <div className="copyright">&#169; Copyright 2022 Holidaze</div>
    </S.StyledFooter>
  );
}

export default Footer;
