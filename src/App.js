import './App.css';
import NavBar from './components/navBar.jsx';
import HomeSection from './components/home.jsx';
import ProjectsSection from './components/projectsSection';
import MathsSection from './components/mathsSection';
import ContactPage from './components/contactPage';
import About from './components/about';
import Footer from './components/footer';

import Spacer from "./components/spacer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeSection/>

      <Spacer height="30px" />

      <ProjectsSection/>
      <Spacer height="30px" />
      <MathsSection />
      <Spacer height="30px" />
      <About />
      <Spacer height="30px" />
      <ContactPage/>
      <Spacer height="30px" />
      <Footer />
    </div>
  );
}

export default App;
