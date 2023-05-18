import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavRoutes from './routes/NavRoutes';
import { Toaster } from 'react-hot-toast';

const getProducts = async() =>{
  try {

      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
      }
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(creds),
      });

      const {encodedToken} = await res.json();

      localStorage.setItem("encodedToken", encodedToken);
      console.log(localStorage.getItem("encodedToken"));

  } catch (error) {
      console.error(error);
  }
}

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1 onClick={()=> getProducts()}>Hello People</h1> */}
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

