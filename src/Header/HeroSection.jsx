import BookingForm from './BookingForm';
import './HeroSection.css';
import Header from './Header';



const HeroSection = () => {
  return (
    <>
    <Header/>
    <section className="hero-section">
      <div className="hero-bg-pattern"></div>
      <div className="luxury-accent"></div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Enjoy A <span>Luxury</span> Experience
            Vedha <span> Hub</span>
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam minima sunt optio laborum illum pariatur neque esse dolorum, sit ab in reiciendis, qui ducimus.
          </p>
          <button className="visit-btn">
            Visit Us
          </button>
        </div>
        
        <div>
          <BookingForm />
        </div>
      </div>
    </section>
    
    
    </>
  );
};

export default HeroSection;