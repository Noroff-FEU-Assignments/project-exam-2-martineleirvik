import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Spesific from "./pages/Spesific";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import Login from "./pages/Login";
import Nav from "./components/layout/Nav";
import Hotels from "./components/booking/Hotels";
import BedandBreakfasts from "./components/booking/BedandBreakfasts";
import GuestHouses from "./components/booking/GuestHouses";
// styles
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Nav />
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
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
