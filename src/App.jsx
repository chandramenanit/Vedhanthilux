import AboutSection from './Header/AboutSection';
import RoomsPage from './Header/RoomsPage';
import BlogSection from './Header/BlogSection'
import Footer from './Header/Footer';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './Header/HeroSection';

const App = () => {
  return (
    <>
    <div className="luxury-container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/AboutSection' element={<AboutSection/>}/>
        <Route path='/RoomsPage' element={<RoomsPage/>}/>
        <Route path='/BlogSection' element={<BlogSection/>}/>
         <Route path='Footer' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
};

export default App;