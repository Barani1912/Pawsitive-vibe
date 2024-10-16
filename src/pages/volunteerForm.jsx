import React, { useState } from 'react';
import './volunteerForm.css'; 
import Base from '../componets/Base';
import { BackTop } from 'antd';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: '',
    preferredTask: '',
    skills: '',
    previousExperience: '',
    whyVolunteer: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      availability: '',
      preferredTask: '',
      skills: '',
      previousExperience: '',
      whyVolunteer: '',
      agreement: false,
    })


  };

  return (

    <Base>
    
    
    <div className="volunteer-form-container">
      <h1 style={{textAlign:"center"}}>Volunteer Application Form</h1>
      <form onSubmit={handleSubmit} className="volunteer-form">
        
       
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        
        <h2>Volunteer Details</h2>
        <div className="form-group">
          <label htmlFor="availability">Availability (e.g., weekends, weekdays, hours):</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferredTask">Preferred Volunteer Tasks (e.g., dog care, event support):</label>
          <input
            type="text"
            id="preferredTask"
            name="preferredTask"
            value={formData.preferredTask}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="skills">Relevant Skills or Expertise:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="previousExperience">Previous Volunteer Experience (if any):</label>
          <textarea
            id="previousExperience"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="whyVolunteer">Why Do You Want to Volunteer With Us?</label>
          <textarea
            id="whyVolunteer"
            name="whyVolunteer"
            value={formData.whyVolunteer}
            onChange={handleChange}
            required
          ></textarea>
        </div>

       
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
            />
            I agree to follow the volunteer guidelines and understand my responsibilities.
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Volunteer Form</button>
      </form>
    </div>

    <div>
      <BackTop visibilityHeight="700" style={{marginRight:"-50px"}} />
    </div>
    </Base>
  );
};

export default VolunteerForm;
