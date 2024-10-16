// import React from 'react';
// import Base from '../componets/Base';
// import { useNavigate } from 'react-router-dom';

// function AdoptPet({details,setDetails}) {
//     const navigate=useNavigate();

//     function navtodetails(src){
//       setDetails(src);
//       navigate("/pet-details");
//     }
   

//   return (
//    <Base>
//     <div className='adopt-pet-parent-card'>
//         {details.map((src,idx)=>
//             <div className='adopt-pet-card' key={idx}>
//                 <img src={src.image} alt={src.name}/>
//                 <button onClick={()=>navtodetails(src)}>Adopt {src.name}</button>
//             </div>
//         )}
//     </div>
//    </Base>
//   )
// }

// export default AdoptPet;
///////////////////////////////////////////////////////
//using link tag...from GPT

import React from 'react';
import Base from '../componets/Base';
import { Link } from 'react-router-dom';
import { BackTop } from 'antd';



function AdoptPet({details,setDetails}) {

  return (
   <Base>
    <div className='adopt-pet-parent-card'>
        {details.map((src,idx)=>
            <div className='adopt-pet-card' key={idx}>
                <img className="pet-card-img" src={src.image} alt={src.name}/>
                <Link to={`/pet-details/${idx}`}>
                  <button className='pet-card-btn'><b>Adopt {src.name}</b></button>
                </Link>
            </div>
        )}
    </div>

        
    <div>
      <BackTop visibilityHeight="800" style={{marginRight:"-50px"}} />
    </div>

   </Base>
  )
}

export default AdoptPet;