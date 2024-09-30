import digital from './images/digital-presence.jpg';
import economic from './images/economic-growth.jpg';
import com from './images/communication.jpg';
import ino from './images/innovation.jpg';
import eff from './images/convenience.jpg';
import educ from './images/education.jpg';
import sec from './images/security.jpg';
import './Benefits.css';

function Benefits() {
    // JavaScript function to toggle content visibility
    const toggleContent = (id) => {
        const content = document.getElementById('content-' + id);
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    };

    return (
      <div className="Benefits">
        { /* Benefits Section */ }
        <section id="benefits" className="benefits">
            <h2>Importance of Web Development</h2>
            
            <div className="benefit-row">
                { /* Benefit Item 1 */ }
                <div className="benefit-item" onClick={() => toggleContent(1)}>
                    <img src={digital} alt="Digital Presence" />
                    <h3>1. Digital Presence for Businesses</h3>
                    <div className="benefit-content" id="content-1">
                        <p><strong>Visibility:</strong> In today&apos;s digital age, a website is often the first point of contact between a business and potential customers. A well-designed website helps establish credibility and trust.</p>
                        <p><strong>Accessibility:</strong> It allows businesses to reach a global audience, breaking geographical barriers. With the internet, small businesses can compete on a larger scale.</p>
                    </div>
                </div>

                { /* Benefit Item 2 */ }
                <div className="benefit-item" onClick={() => toggleContent(2)}>
                    <img src={economic} alt="Economic Growth" />
                    <h3>2. Economic Growth</h3>
                    <div className="benefit-content" id="content-2">
                        <p><strong>Job Creation:</strong> Web development is a major industry that creates jobs for millions of people worldwide. It includes roles like developers, designers, content creators, and digital marketers.</p>
                        <p><strong>Entrepreneurship:</strong> With the rise of e-commerce and digital platforms, web development enables individuals to start their own businesses with relatively low overhead costs.</p>
                    </div>
                </div>
            </div>

            <div className="benefit-row">
                { /* Benefit Item 3 */ }
                <div className="benefit-item" onClick={() => toggleContent(3)}>
                    <img src={com} alt="Communication and Information Sharing" />
                    <h3>3. Communication and Information Sharing</h3>
                    <div className="benefit-content" id="content-3">
                        <p><strong>Access to Information:</strong> Websites provide a platform for sharing knowledge and information on a global scale. Educational institutions, news organizations, and forums all rely on web development to distribute content.</p>
                        <p><strong>Social Interaction:</strong> Social media platforms, which are essentially complex web applications, have transformed how we communicate, connect, and share experiences.</p>
                    </div>
                </div>

                { /* Benefit Item 4 */ }
                <div className="benefit-item" onClick={() => toggleContent(4)}>
                    <img src={ino} alt="Innovation and Creativity" />
                    <h3>4. Innovation and Creativity</h3>
                    <div className="benefit-content" id="content-4">
                        <p><strong>New Technologies:</strong> The field of web development is constantly evolving, driving innovation in areas like artificial intelligence, virtual reality, and interactive media.</p>
                        <p><strong>Creative Expression:</strong> Web development allows for creative expression through design, multimedia, and interactive experiences, making the internet a dynamic and engaging space.</p>
                    </div>
                </div>
            </div>

            <div className="benefit-row">
                { /* Benefit Item 5 */ }
                <div className="benefit-item" onClick={() => toggleContent(5)}>
                    <img src={eff} alt="Convenience and Efficiency" />
                    <h3>5. Convenience and Efficiency</h3>
                    <div className="benefit-content" id="content-5">
                        <p><strong>Automation:</strong> Web applications automate tasks, from shopping to booking services, making life more convenient.</p>
                        <p><strong>Integration:</strong> Websites and web apps can integrate with other digital tools and services, streamlining workflows and improving efficiency in both personal and professional contexts.</p>
                    </div>
                </div>

                { /* Benefit Item 6 */ }
                <div className="benefit-item" onClick={() => toggleContent(6)}>
                    <img src={educ} alt="Education and Learning" />
                    <h3>6. Education and Learning</h3>
                    <div className="benefit-content" id="content-6">
                        <p><strong>Online Learning:</strong> Web development has made online education accessible, enabling people to learn new skills, pursue degrees, and access educational resources from anywhere in the world.</p>
                        <p><strong>Skill Development:</strong> Learning web development itself is a valuable skill, providing opportunities for career growth and personal development.</p>
                    </div>
                </div>
            </div>

            <div className="benefit-row">
                { /* Benefit Item 7 */ }
                <div className="benefit-item" onClick={() => toggleContent(7)}>
                    <img src={sec} alt="Security and Privacy" />
                    <h3>7. Security and Privacy</h3>
                    <div className="benefit-content" id="content-7">
                        <p><strong>Protection of Data:</strong> With the increase in online transactions and data sharing, web development plays a critical role in ensuring that websites and applications are secure from cyber threats.</p>
                        <p><strong>Compliance:</strong> Developers must also ensure that websites comply with regulations and standards, such as GDPR, to protect user privacy and data integrity.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}

export default Benefits;
