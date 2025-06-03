import "../Header/BlogSection.css";
import Header from './Header';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "24th March 2025",
      title: "Cras accumsan nulla nec lacus ultricies placerat.",
      description: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      date: "24th March 2025",
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
      description: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      date: "24th March 2025",
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description: "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    }
  ];

  return (
    <>
    <Header/>
    <div className="blog-section">
      <div className="container">
        <div className="header">
          <p className="header-subtitle">Our Blog</p>
          <h1 className="header-title">Latest Blog & News</h1>
          <p className="header-description">
            Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum 
            metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="card-image-container">
                <img src={post.image} alt={post.title} className="card-image" />
                <div className="date-badge">{post.date}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.description}</p>
                <button className="read-more-btn">
                  Read More
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="decorative-circle"></div>
      <div className="decorative-square"></div>
    </div>
    
    </>
  );
};

export default BlogSection;
