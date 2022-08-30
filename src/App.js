import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Spesific from "./pages/Spesific";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import Login from "./pages/Login";
import Nav from "./components/layout/Nav";

// styles
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
