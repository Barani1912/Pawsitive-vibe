import React from 'react'
import Base from '../componets/Base'
import { useNavigate } from 'react-router-dom'
import { BackTop } from 'antd';

function Volunteer() {
    const navigate = useNavigate()
  return (
   <Base>
   <div className='volunteer-content'>
        <div>    
            <h3>Why Volunteer?</h3>
            <ul className='why-volunteer'>
                    <li>Help Dogs Find Homes: Your efforts can directly contribute to helping dogs find their forever families.</li>
                    <li>Learn New Skills: Gain valuable experience in animal care, shelter management, and event coordination.
                    </li>
                    <li>Build Connections: Join a community of fellow dog lovers who share your passion for animal welfare.</li>
                    <li>Make a Positive Impact: Each hour you spend volunteering helps improve the quality of life for the dogs in our care.</li>
            </ul>
        </div>
        <div>
            <h3 >Volunteer Opportunities</h3>
            
                <ul className='volunteer-opportunities'>
                    {/* <p>We offer a variety of roles for volunteers, whether you can commit a few hours a week or more. Here are some ways you can get involved:</p> */}
                    <li>Dog Walking and Socialization: Take our dogs for walks, play with them, and help them build trust with humans.</li>
                    <li>Shelter Support: Assist with cleaning, feeding, and maintaining a comfortable environment for the dogs.</li>
                    <li>Adoption Events: Help organize and run adoption fairs and other events to promote our dogs to the public.</li>
                    <li>Fostering: Provide temporary homes for dogs who need special care, medical treatment, or extra attention.</li>
                    <li>Transport Assistance: Help transport dogs to vet appointments, foster homes, or adoption events.</li>
                    <li>Photography & Social Media: If you have a talent for photography or social media, help us capture heartwarming photos and stories to share online.</li>
                    <li>Administrative Help: Support our team by assisting with paperwork, adoption applications, or managing volunteer schedules.</li>
                </ul>
            
        </div>
        <div>
            <h3>How to Get Involved</h3>
            <ul className='get-involved'>
                <li>Complete the Volunteer Application: Fill out the form below with your availability and areas of interest.</li>
                <li>Attend a Volunteer Orientation: We’ll invite you to a brief orientation session to introduce you to our team, provide necessary training, and familiarize you with our shelter.</li>
                <li>Start Volunteering! Once you're set up, you can begin volunteering at your convenience, based on the roles you choose.</li>
            </ul>
        </div>
        <h3>Make a Difference in a Dog's Life --{'>'}   <button onClick={()=>navigate("/volunteer-form")} className='action-btns'><b>Become a Volunteer</b></button></h3>
    </div>


    <div>
      <BackTop visibilityHeight="700" style={{marginRight:"-50px"}} />
    </div>
   </Base>

 

   
  )
}

export default Volunteer