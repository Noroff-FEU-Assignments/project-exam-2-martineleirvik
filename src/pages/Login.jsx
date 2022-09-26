// components
import Footer from "../components/layout/footer/Footer";
import Heading from "../components/layout/Heading";
import LoginForm from "../components/login/LoginForm";

function Login() {
  return (
    <div className="container">
      <Heading heading="Login" />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
