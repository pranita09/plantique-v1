import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavRoutes from './routes/NavRoutes';

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
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;

