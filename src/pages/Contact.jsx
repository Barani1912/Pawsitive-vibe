import React, { useState } from 'react';
import './contactPage.css'; 
import Base from '../componets/Base';
import { BackTop } from 'antd';

const DogAdoptionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
   
    dogName: '',
    breed: '',
    ageRange: '',
    gender: '',
    size: '',
    ownOrRent: '',
    permission: '',
    homeType: '',
    fencedYard: '',
    children: '',
    ownedDogBefore: '',
   
    whereKept: '',
    reasonForAdoption: '',
    financialResponsibility: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <Base>

    <div className='container'>
    <div className="adoption-form-container">
      <h1 style={{textAlign:"center"}}>Dog Adoption Form</h1>
      <form onSubmit={handleSubmit} className="adoption-form">
        
    
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Home Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>

       

        
        <h2>Dog Preference</h2>
        <div className="form-group">
          <label htmlFor="dogName">Dog's Name (if applicable):</label>
          <input type="text" id="dogName" name="dogName" value={formData.dogName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Preferred Breed (if any):</label>
          <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="ageRange">Age Range Preference:</label>
          <input type="text" id="ageRange" name="ageRange" value={formData.ageRange} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender Preference:</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="size">Size Preference:</label>
          <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} />
        </div>

       
        <h2>Household Information</h2>
        <div className="form-group">
          <label htmlFor="ownOrRent">Do You Own or Rent Your Home?</label>
          <input type="text" id="ownOrRent" name="ownOrRent" value={formData.ownOrRent} onChange={handleChange}/>
        </div>

       
          <div className="form-group">
            <label htmlFor="permission">Do You Have Permission from the Landlord to Have a Dog?</label>
            <input  type="text" id="permission" name="permission" value={formData.permission} onChange={handleChange}/>
              
          </div>
        

        <div className="form-group">
          <label htmlFor="homeType">Type of Home:</label>
          <input type="text" id="homeType" name="homeType" value={formData.homeType} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="fencedYard">Do You Have a Fenced Yard?</label>
          <input type="text" id="fencedYard" name="fencedYard" value={formData.fencedYard} onChange={handleChange}/>
            
        </div>

        <div className="form-group">
          <label htmlFor="children">Are There Any Children?</label>
          <input type="text" id="children" name="children" value={formData.children} onChange={handleChange}/>
           
        </div>

        <div className="form-group">
          <label htmlFor="ownedDogBefore">Have You Owned a Dog Before?</label>
          <input type="text" id="ownedDogBefore" name="ownedDogBefore" value={formData.ownedDogBefore} onChange={handleChange}/>
           
        </div>

       

        <div className="form-group">
          <label htmlFor="whereKept">Where Will the Dog Be Kept When You’re Not at Home?</label>
          <input type="text" id="whereKept" name="whereKept" value={formData.whereKept} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="reasonForAdoption">What is Your Primary Reason for Adopting a Dog?</label>
          <input type="text" id="reasonForAdoption" name="reasonForAdoption" value={formData.reasonForAdoption} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="financialResponsibility">Are You Prepared for the Financial Responsibility of Owning a Dog?</label>
          <input type="text" id="financialResponsibility" name="financialResponsibility" value={formData.financialResponsibility} onChange={handleChange}/>
            
        </div>

       
        <div className="form-group">
          <label>
            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} />
            I certify that the information provided is true and that I understand the responsibilities of adopting a dog.
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Adoption Form</button>
      </form>
    </div>
    </div>



    <div>
      <BackTop visibilityHeight="700" style={{marginRight:"-50px"}} />
    </div>
    </Base>
  );
};

export default DogAdoptionForm;
