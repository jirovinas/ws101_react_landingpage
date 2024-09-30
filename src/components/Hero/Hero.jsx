import './Hero.css';

function Hero() { 
  // JavaScript function to scroll to the About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Hero">
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Why Web Development Matters</h1>
          <p>The backbone of the digital world, enabling connections, innovations, and opportunities.</p>
          {/* Use onClick in React to call the scrollToAbout function */}
          <button onClick={scrollToAbout}>Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
