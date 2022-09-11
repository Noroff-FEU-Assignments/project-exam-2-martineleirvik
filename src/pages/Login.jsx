// components
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import LoginForm from "../components/login/LoginForm";

function Login() {
  return (
    <>
      <Heading heading="Login" />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
