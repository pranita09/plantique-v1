import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavRoutes from './routes/NavRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster 
        position='top-right'
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;

