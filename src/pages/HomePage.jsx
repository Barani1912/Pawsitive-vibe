import React from 'react'
import Base from '../componets/Base'
import HomeCarousel from '../componets/homePageCarousel'
import { useNavigate } from 'react-router-dom';
import { BackTop } from 'antd';

// import Lottie from 'lottie-react'
// import Running from '../assets/Running.json'

function HomePage() {
  const navigate = useNavigate()
  return (
        <Base>
          <h1 style={{textAlign:"center"}}>Find Your New Best Friend Today!</h1>

          <div className='home-page-img-parent-div'>
            <div className='home-page-img-child-div'>
              <HomeCarousel/>
            </div>
          </div>
         

          <h3 style={{textAlign:"center",marginTop:"7%"}}> Meet Our Furry Friend --{'>'} <button  onClick={()=>navigate("/adopt-a-pet")} className='action-btns2'><b>Adopt a Pet🐶</b></button></h3>

          <div className='adoption-tips'>
            <div>
              <h1  style={{textAlign:"center",marginBottom:"5%"}}>#How to Care for Your Newly Adopted Dog</h1>
            </div>
            
            <ol style={{marginBottom:"5%"}}>
              <h3><li>Bringing Your New Dog Home    </li></h3>
              <ul>
                <li>Prepare a Cozy Space: Set up a comfortable, quiet area where your dog can relax and feel safe as they adjust to their new surroundings.</li>
                <li>Introduce Gradually: Allow your dog to explore their new home slowly. Introduce family members and other pets in a calm, controlled manner.</li>
              </ul>

              <h3><li>Nutrition and Health          </li></h3>
              <ul>
                <li>Balanced Diet: Provide high-quality food tailored to your dog’s age, breed, and health needs. Consult a vet to ensure your dog is getting the right nutrients.</li>
                <li>Hydration: Ensure fresh, clean water is always available.</li>
                <li>Vet Check-up: Schedule a vet appointment shortly after adoption to address vaccinations, health checks, and parasite control.</li>
              </ul>

              <h3><li>Exercise and Training         </li></h3>
              <ul>
                <li>Daily Exercise: Regular walks and playtime are essential to keeping your dog physically fit and mentally stimulated.</li>
                <li>Training: Start basic training early to establish commands, good behavior, and house rules. Positive reinforcement works best with newly adopted dogs.</li>
              </ul>

              <h3><li>Mental Stimulation and Bonding</li></h3>
              <ul>
                <li>Interactive Toys: Use toys, puzzles, and games to keep your dog mentally engaged and reduce boredom.</li>
                <li>Build Trust: Spend quality time with your dog, and be patient as they adjust. It takes time to build trust and form a strong bond.</li>
              </ul>

              <h3><li>Routine and Consistency       </li></h3>
              <ul>
                <li>Establish a Routine: Dogs thrive on routine. Regular feeding, exercise, and bedtime schedules help them feel secure and adjust faster.</li>
                <li>Grooming: Regular grooming sessions such as brushing, nail trimming, and ear cleaning help maintain their health and comfort.</li>
              </ul>

              <h3><li>Socialization and Patience    </li></h3>
              <ul>
                <li>Introduce to New Surroundings Slowly: Gradually expose your dog to new environments, people, and other pets to encourage positive social behavior.</li>
                <li>Be Patient: Every dog adjusts at their own pace. Some may settle in quickly, while others need more time to feel secure and comfortable.</li>
              </ul>
            </ol>

          </div>
         
          <h3 style={{textAlign:"center"}}>To know more about Volunteering --{'>'} <button  onClick={()=>navigate("/volunteer")} className='action-btns2'><b>Explore Now</b></button></h3>



        <div>
          <BackTop visibilityHeight="1000" style={{marginRight:"-50px"}} />
        </div>
        
        </Base>
  )
}

export default HomePage