
import './App.css';
import Navbar from "./components/Navbar"
import home from "./pages/home"
import Footer from "./components/footer"
import Header from "./components/header"




import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    
   <div className="App">
    

    
      <Router>
      <Navbar/>
      <Header/>
      <Switch><Route path="/"exact component={home}/>
      
      
      
      </Switch>
      <Footer/>
      </Router> 
    </div>
    
  );
}

export default App;
