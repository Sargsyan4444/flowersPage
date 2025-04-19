
import './App.css';
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
      </main>
        <Footer/>
    </div>
  );
}

export default App;
