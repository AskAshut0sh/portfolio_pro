import React, { useState, useEffect, useRef } from 'react';
import Icon from 'components/AppIcon';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  const contactInfo = {
    email: "swainashutosh123@gmail.com",
    phone: "+91 77879 69350",
    location: "Bhubaneswar, India",
    linkedin: "https://www.linkedin.com/in/ashutosh-swain-283b75200/",
    github: "https://github.com/AskAshut0sh",
    twitter: "https://x.com/AskAshut0sh",
    availability: "Available for new opportunities"
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: contactInfo.linkedin,
      color: "text-blue-400",
      description: "Professional network and career updates"
    },
    {
      name: "GitHub",
      icon: "Github",
      url: contactInfo.github,
      color: "text-text-primary",
      description: "Code repositories and automation frameworks"
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: contactInfo.twitter,
      color: "text-blue-400",
      description: "Tech insights and industry discussions"
    },
    {
      name: "Email",
      icon: "Mail",
      url: `mailto:${contactInfo.email}`,
      color: "text-primary",
      description: "Direct communication for opportunities"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const handleDirectContact = (type) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${contactInfo.email}?subject=Professional Inquiry`);
        break;
      case 'phone':
        window.open(`tel:${contactInfo.phone}`);
        break;
      case 'linkedin':
        window.open(contactInfo.linkedin, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading font-bold text-fluid-3xl mb-4">
            Let's Connect
          </h2>
          <p className="text-text-secondary text-fluid-lg font-body max-w-2xl mx-auto">
            Ready to discuss quality assurance opportunities, testing strategies, or potential collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Availability Status */}
            <div className="glassmorphism p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <h3 className="text-text-primary font-heading font-bold text-fluid-lg">
                  Current Status
                </h3>
              </div>
              <p className="text-success font-body font-semibold text-fluid-base mb-2">
                {contactInfo.availability}
              </p>
              <p className="text-text-secondary text-fluid-sm font-body leading-relaxed">
                Open to discussing QA Engineer positions, automation testing projects, and consulting opportunities in quality assurance.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-text-primary font-heading font-bold text-fluid-lg mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleDirectContact('email')}
                  className="w-full flex items-center space-x-4 glassmorphism p-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover-scale text-left"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-text-primary font-body font-semibold text-fluid-base">
                      Email
                    </p>
                    <p className="text-text-secondary text-fluid-sm">
                      {contactInfo.email}
                    </p>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-text-secondary ml-auto" />
                </button>

                <button
                  onClick={() => handleDirectContact('phone')}
                  className="w-full flex items-center space-x-4 glassmorphism p-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover-scale text-left"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-success" />
                  </div>
                  <div>
                    <p className="text-text-primary font-body font-semibold text-fluid-base">
                      Phone
                    </p>
                    <p className="text-text-secondary text-fluid-sm">
                      {contactInfo.phone}
                    </p>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-text-secondary ml-auto" />
                </button>

                <div className="flex items-center space-x-4 glassmorphism p-4 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-text-primary font-body font-semibold text-fluid-base">
                      Location
                    </p>
                    <p className="text-text-secondary text-fluid-sm">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-text-primary font-heading font-bold text-fluid-lg mb-6">
                Connect on Social
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 glassmorphism p-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover-scale ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon name={social.icon} size={20} className={social.color} />
                    <div>
                      <p className="text-text-primary font-body font-semibold text-fluid-sm">
                        {social.name}
                      </p>
                      <p className="text-text-secondary text-fluid-xs">
                        {social.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-xl">
            <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-body font-semibold text-fluid-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-primary font-body font-semibold text-fluid-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-primary font-body font-semibold text-fluid-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-200"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-body font-semibold text-fluid-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or how I can help..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white px-6 py-4 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale shadow-elevation-2 hover:shadow-elevation-3 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-success text-fluid-sm font-body">
                  <Icon name="CheckCircle" size={16} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-text-primary font-heading font-bold text-fluid-xl mb-6 text-center">
            Location
          </h3>
          <div className="glassmorphism p-4 rounded-xl">
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Bhubaneswar, India"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=20.341388076573203,85.8035840490491&z=14&output=embed"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;