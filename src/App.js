
// import React, { useState } from 'react';
// import './App.css';
// import data from './Datas/data';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AdoptPet from './pages/AdoptPet';
// import PetDetails from './pages/PetDetails';
// import Volunteer from './pages/Volunteer';
// import DogAdoptionForm from './pages/Contact';
// import VolunteerForm from './pages/volunteerForm';
// import Login from './componets/Login';
// import SignUp from './componets/SignUp';



// function App() {

//    const[details,setDetails]=useState(data)
//    const [isLoggedIn, setIsLoggedIn] = useState(false);

 

//   return (
    
//     isLoggedIn?<Routes>
//         {/* <Route path='/login' element={<Login
//         isLoggedIn={isLoggedIn}
//         setIsLoggedIn={setIsLoggedIn}
//         />} />
//         <Route path='/signup' element={<SignUp/>} ></Route> */}
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/adopt-a-pet" element={<AdoptPet
//         details={details}
//         setDetails={setDetails} />} />
//         <Route path="/pet-details/:ID" element={<PetDetails
//         details={details} />}/>
//         <Route path="/volunteer" element={<Volunteer/>}/>
//         <Route path="/volunteer-form" element={<VolunteerForm/>}/>
//         <Route path="/contact" element={<DogAdoptionForm/>}/>
//       </Routes>:<div>

//         {/* <Login
//         setIsLoggedIn={setIsLoggedIn}
//         isLoggedIn={isLoggedIn}/> */}


//         <Login
//         setIsLoggedIn={setIsLoggedIn}
//         isLoggedIn={isLoggedIn}/> 
//         <SignUp/>

//         {/* <Routes>
//         <Route path='/login' element={<Login
//         isLoggedIn={isLoggedIn}
//         setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path='/signup' element={<SignUp/>} ></Route>
//         </Routes>  */}
        
//         </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import './App.css';
import data from './Datas/data';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdoptPet from './pages/AdoptPet';
import PetDetails from './pages/PetDetails';
import Volunteer from './pages/Volunteer';
import DogAdoptionForm from './pages/Contact';
import VolunteerForm from './pages/volunteerForm';



function App() {
  
   const[details,setDetails]=useState(data)

  return (
  <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/adopt-a-pet" element={<AdoptPet
        details={details}
        setDetails={setDetails} />} />
        <Route path="/pet-details/:ID" element={<PetDetails
        details={details} />}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/volunteer-form" element={<VolunteerForm/>}/>
        <Route path="/contact" element={<DogAdoptionForm/>}/>
      </Routes>
  );
}

export default App;

