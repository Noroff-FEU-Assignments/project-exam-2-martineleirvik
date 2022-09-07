import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Spesific from "./pages/Spesific";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import Login from "./pages/Login";
// import Navigation from "./components/layout/nav/Nav";
import Navbar from "./components/layout/nav/nav2";
import Hotels from "./components/booking/Hotels";
import BedandBreakfasts from "./components/booking/BedandBreakfasts";
import GuestHouses from "./components/booking/GuestHouses";
import NewEstablishment from "./pages/NewEstablishment";
import ListMessage from "./pages/ListMessages";
import ListEnquiry from "./pages/ListEnquries";
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
              <Route path="/enquiry" exact element={<Enquiry />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/hotels" exact element={<Hotels />} />
              <Route
                path="/bedandbreakfasts"
                exact
                element={<BedandBreakfasts />}
              />
              <Route path="/guesthouses" exact element={<GuestHouses />} />
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
