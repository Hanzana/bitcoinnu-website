import { Mail, User, MessageSquare, Send, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useState } from "react";
import "../styles/contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-floating-element contact-floating-1" />
        <div className="contact-floating-element contact-floating-2" />
        
        <div className="container contact-hero-content">
          <div className="contact-hero-badge">
            <Mail size={20} />
            <span>Get In Touch</span>
          </div>
          
          <h1 className="contact-title">
            <span className="contact-title-primary">Contact</span>
            <br />
            <span className="contact-title-secondary">Us</span>
          </h1>
          
          <p className="contact-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <div className="contact-form">
                <div className="contact-form-group">
                  <div className="contact-input-wrapper">
                    <User className="contact-input-icon" size={20} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <div className="contact-input-wrapper">
                    <Mail className="contact-input-icon" size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <div className="contact-input-wrapper contact-textarea-wrapper">
                    <MessageSquare className="contact-input-icon contact-textarea-icon" size={20} />
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input contact-textarea"
                      rows={5}
                    />
                  </div>
                </div>

                <button onClick={handleSubmit} className="contact-submit-btn">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </div>

            <div className="contact-illustration">
              <div className="contact-illustration-wrapper">
                <svg viewBox="0 0 400 400" className="contact-svg">
                  <defs>
                    <linearGradient id="personGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(35, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(45, 100%, 60%)" />
                    </linearGradient>
                  </defs>
                  
                  <circle cx="80" cy="60" r="20" fill="hsl(35, 100%, 50%)" opacity="0.2" className="pulse-ring" />
                  <path d="M 75 55 L 85 55 L 85 65 L 75 65 Z M 77 57 L 83 57 L 83 60 L 77 60 Z" fill="hsl(35, 100%, 50%)" />
                  
                  <circle cx="350" cy="100" r="3" fill="hsl(35, 100%, 50%)" />
                  <circle cx="360" cy="130" r="2" fill="hsl(45, 100%, 60%)" />
                  <path d="M 70 180 Q 80 170 90 180" stroke="hsl(35, 100%, 50%)" strokeWidth="2" fill="none" />
                  <path d="M 320 250 Q 340 240 360 250" stroke="hsl(45, 100%, 60%)" strokeWidth="2" fill="none" />
                  
                  <circle cx="200" cy="120" r="30" fill="hsl(220, 20%, 12%)" stroke="url(#personGradient)" strokeWidth="3" />
                  <circle cx="190" cy="115" r="3" fill="hsl(45, 100%, 95%)" />
                  <circle cx="210" cy="115" r="3" fill="hsl(45, 100%, 95%)" />
                  <path d="M 190 130 Q 200 135 210 130" stroke="hsl(45, 100%, 95%)" strokeWidth="2" fill="none" />
                  
                  <rect x="150" y="150" width="100" height="120" rx="10" fill="url(#personGradient)" />
                  <path d="M 150 160 L 150 150 Q 180 155 200 150 Q 220 155 250 150 L 250 160" fill="url(#personGradient)" />
                  
                  <g className="float-animation">
                    <rect x="120" y="200" width="90" height="60" rx="5" fill="hsl(45, 100%, 95%)" stroke="hsl(35, 100%, 50%)" strokeWidth="3" />
                    <path d="M 120 200 L 165 235 L 210 200" stroke="hsl(35, 100%, 50%)" strokeWidth="3" fill="none" />
                    <line x1="120" y1="200" x2="120" y2="260" stroke="hsl(35, 100%, 50%)" strokeWidth="3" />
                    <line x1="210" y1="200" x2="210" y2="260" stroke="hsl(35, 100%, 50%)" strokeWidth="3" />
                    <line x1="120" y1="260" x2="210" y2="260" stroke="hsl(35, 100%, 50%)" strokeWidth="3" />
                  </g>
                  
                  <rect x="170" y="270" width="25" height="80" rx="12" fill="hsl(220, 20%, 15%)" />
                  <rect x="205" y="270" width="25" height="80" rx="12" fill="hsl(220, 20%, 15%)" />
                  
                  <ellipse cx="182" cy="355" rx="18" ry="8" fill="hsl(220, 20%, 10%)" />
                  <ellipse cx="218" cy="355" rx="18" ry="8" fill="hsl(220, 20%, 10%)" />
                  
                  <ellipse cx="200" cy="370" rx="60" ry="8" fill="hsl(220, 20%, 12%)" stroke="hsl(35, 100%, 50%)" strokeWidth="2" />
                  <circle cx="165" cy="370" r="5" fill="hsl(220, 20%, 10%)" />
                  <circle cx="235" cy="370" r="5" fill="hsl(220, 20%, 10%)" />
                  
                  <line x1="310" y1="110" x2="340" y2="110" stroke="hsl(35, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="310" y1="125" x2="340" y2="125" stroke="hsl(35, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="310" y1="140" x2="330" y2="140" stroke="hsl(35, 100%, 50%)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <h2 className="contact-info-title">Other Ways to Reach Us</h2>
          
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone />
              </div>
              <h3 className="contact-info-card-title">Phone</h3>
              <p className="contact-info-card-text">+61 4 12 345 678</p>
              <p className="contact-info-card-subtext">Mon–Fri: 09:00–17:00 (UTC+10)</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail />
              </div>
              <h3 className="contact-info-card-title">Email</h3>
              <p className="contact-info-card-text">support@bitcoinnu.com</p>
              <p className="contact-info-card-subtext">We'll respond within 24 hours</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Clock />
              </div>
              <h3 className="contact-info-card-title">Support Hours</h3>
              <p className="contact-info-card-text">24/7 Available</p>
              <p className="contact-info-card-subtext">Round the clock support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;