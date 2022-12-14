import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Homepage from "./pages/homepage/Homepage";
import Booking from "./pages/booking/Booking";
import Spesific from "./pages/spesific/Spesific";
import Contact from "./pages/contact/Contact";
import Enquiry from "./pages/enquiry/Enquiry";
import Login from "./pages/login/Login";
import Navbar from "./components/layout/nav/Nav";
import NewEstablishment from "./pages/newestablishment/NewEstablishment";
import ListMessage from "./pages/listmessages/ListMessages";
import ListEnquiry from "./pages/listenquries/ListEnquries";
import { AuthProvider } from "./components/context/AuthContext";
// styles
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/booking" exact element={<Booking />} />
              <Route path="/booking/:id" exact element={<Spesific />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/enquiry/:name" exact element={<Enquiry />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/listenquiry" exact element={<ListEnquiry />} />
              <Route path="/listmessage" exact element={<ListMessage />} />
              <Route
                path="/newestablishment"
                exact
                element={<NewEstablishment />}
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
