
import './App.css';
import Bestsellers from './Bestsellers';
import Discount from './Discount';
import Download from './Download';
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';
import Speciality from './Speciality';

function App() {
  return (
    <div className="App font-lato">
      <Header/>
      <main>
        <MainPage/>
        <Speciality/>
        <Discount/>
        <Bestsellers/>
        <Download/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
