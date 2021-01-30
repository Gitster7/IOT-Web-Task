import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/navbar.jsx';
import Home from './components/homeBanner.jsx';
import CenteredGrid from './components/grid.jsx';
import CenteredGridFoot from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SearchAppBar />
      <Home />
        <CenteredGrid />
        <CenteredGridFoot />
      </header>
    </div>
  );
}

export default App;
