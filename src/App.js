

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login-form';
import NavBar from './components/nav-bar'

function App() {
  return (
    <div className="App">
      <NavBar />
     
      <header className="App-header">
        <LoginForm /><br/>
        <a
          className="btn btn-info"
          href="https://www.haverford.edu/arboretum/news/internet-trees-underground-social-network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Internet for Trees
        </a>
      </header>
    </div>
  );
}

export default App;
