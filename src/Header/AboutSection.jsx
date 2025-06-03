import { Check, Award, Shield, Users, Star, Clock } from 'lucide-react';
import "./AboutSection.css"
import Header from './Header';

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24 Month / 24,000km Nationwide Warranty",
      description: "Complete protection and peace of mind with our comprehensive warranty coverage."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Service Excellence",
      description: "Curabitur dapibus nisl a urna congue, in pharetra urna accumsan vestibulum."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Rewards Program",
      description: "Exclusive benefits and excellent technology for our valued guests and loyal customers."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Guests" },
    { number: "50+", label: "Luxury Rooms" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Concierge Service" }
  ];

  return (
    <>
    <Header/>
    <section className="about-section">
      <div className="about-container">
        <div className="image-gallery">
          <div className="gallery-grid">
            <div className="main-image">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Hotel Lobby" 
                className="gallery-img"
              />
              <div className="image-overlay">
                <Star className="w-8 h-8 text-gold" />
                <span className="overlay-text">5-Star Experience</span>
              </div>
            </div>
            
            <div className="side-images">
              <div className="small-image">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Luxury Suite" 
                  className="gallery-img"
                />
              </div>
              <div className="small-image">
                <img 
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Hotel Restaurant" 
                  className="gallery-img"
                />
              </div>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              Most Safe & Rated
              <span className="title-highlight"> Hotel In Coimbatore</span>
            </h2>
          </div>

          <div className="content-body">
            <p className="main-description">
              Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis 
              rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula 
              lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
            </p>

            <p className="secondary-description">
              Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas 
              consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In 
              commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus 
              blandit. Aenean eu vulputate lorem, quis auctor lectus.
            </p>

            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="discover-btn">
              <span>DISCOVER MORE</span>
              <div className="btn-shine"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
    </section>
    
    </>
  );
};

export default AboutSection;