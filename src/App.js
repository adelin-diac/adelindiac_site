import './App.css';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer';
import { Routes, Route } from "react-router-dom";
import Main from './components/main';
import Wordle from './components/projects/wordle';
import ArduinoRoulette from './components/projects/arduinoRoulette';
import CollegeElectronics from './components/projects/collegeElectronics';
import PdfApp from './components/projects/pdfApp';
import ThisWebsite from './components/projects/thisWebsite';
import QrApp from './components/projects/qrApp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="arduino-roulette" element={<ArduinoRoulette/>}/>
        <Route path="electronics" element={<CollegeElectronics/>}/>
        <Route path="pdf-app" element={<PdfApp/>}/>
        <Route path="adelindiac-website" element={<ThisWebsite/>}/>
        <Route path="qr-app" element={<QrApp/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
