import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }


    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - You'll need to replace these with your actual values
      const serviceID = 'service_4h5entp';
      const templateID = 'template_w0y9tyg';
      const publicKey = 'oNZYqMuVp9rdJjj4I';

      // Template parameters that will be sent to EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`,
        time: new Date().toLocaleString(),
        to_email: 'steamed.dmpling@gmail.com'
      };

      console.log('Sending EmailJS with:', {
        serviceID,
        templateID,
        publicKey,
        templateParams
      });

      // Send email using EmailJS
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      if (result.status === 200) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      setIsSubmitting(false);
      setIsSuccess(false);
      setSubmitMessage(`Error sending message: ${error.text || error.message || 'Unknown error'}. Please try again or contact me directly at steamed.dmpling@gmail.com`);

      // Clear error message after 7 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 7000);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'josejuramer@gmail.com',
      link: 'mailto:josejuramer@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '0987-654-3210',
      link: 'tel: 0987-654-3210'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Rockwell Business Center Tower 2',
      link: 'https://www.google.com/maps/place/Rockwell+Business+Center+Tower+2/@14.5900003,121.0577772,15z/data=!3m1!4b1!4m6!3m5!1s0x3397c804d5433a0f:0xdfb73248cd959d4e!8m2!3d14.5900005!4d121.0680769!16s%2Fg%2F11cn_6d27b?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', link: '#', label: 'GitHub' },
    { icon: 'fab fa-linkedin', link: '#', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', link: '#', label: 'Twitter' },
    { icon: 'fab fa-instagram', link: '#', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a
                      href={info.link}
                      {...(info.link.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>


              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? 'error' : ''}
                  required
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Please provide at least 10 characters..."
                  required
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`submit-message ${isSuccess ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;