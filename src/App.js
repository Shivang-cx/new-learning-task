import logo from './logo.svg';
import './App.css';
import './custom-style.css';
import Header from './header'
import Banner from './banner'
function App() {
  return (
    <div className="App page-main bg-black relative">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
