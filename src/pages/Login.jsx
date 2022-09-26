// components
import Footer from "../components/layout/footer/Footer";
import Heading from "../components/layout/Heading";
import LoginForm from "../components/login/LoginForm";
import { StyledContainer } from "../components/layout/StyledBody.styled";

function Login() {
  return (
    <StyledContainer>
      <Heading heading="Login" />
      <LoginForm />
      <Footer />
    </StyledContainer>
  );
}

export default Login;
