import "./App.css";
import { Toaster } from "react-hot-toast";
import NavRoutes from "./routes/NavRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
      <NavRoutes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
