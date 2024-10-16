// import React from 'react';

// function PetDetails({details}) {
//   return (
//     <div>
//         <div className="dog-details">
//           <h2>Details of {details.name}</h2>
//           <p>Age: {details.age}</p>
//           <p>Size: {details.size}</p>
//           <p>Breed: {details.breed}</p>
//           <button>Adopt Now</button>
//         </div>
//     </div>
//   )
// }

// export default PetDetails;


//////////////////////////////////////


import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../componets/Base';
import { BackTop } from 'antd';

function PetDetails({details}) {
  const{ID}=useParams();
  const dogDetails = details[ID];
  const navigate = useNavigate()
  return (

<Base>
  <div className="detailss">
    <div className='dogImgDetail'>
      <img src={dogDetails.image} alt='' style={{borderRadius:"10%",width:"100%"}}/>
    </div>
    <div className='parent-dogPersonalDetails'>

      <div>
        <h2 style={{marginBottom:"0"}}>Details of {dogDetails.name}</h2>
      </div>

      <div className='child-dogPesonalDetails'>

        <div>
          <p>Age: {dogDetails.age}</p>
          <p>Vaccinated: {dogDetails.vaccinated}</p>
          <p>Size: {dogDetails.size}</p>
          <p>Breed: {dogDetails.breed}</p>
          
        </div>
        <div>
          <p>Medical History: {dogDetails.medicalHistory}</p>
          <p>Previous Home: {dogDetails.previousHome}</p>
          <p>Favorite Activities: {dogDetails.favoriteActivities}</p>
          <p>Temperament: {dogDetails.temperament}</p>
        </div>

      </div>
      <div>
        <button className="adoptNowBtn" onClick={()=>navigate("/contact")}><b>Adopt Now</b></button>
      </div>

    </div>
  </div>



  <div>
    <BackTop style={{marginRight:"-50px"}} />
  </div>
</Base>

  )}


export default PetDetails;