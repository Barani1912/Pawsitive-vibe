import React from 'react';
import { Carousel, ConfigProvider } from "antd";
// import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";


function HomeCarousel() {
  return (

<ConfigProvider
  theme={{
    components: {
      Carousel: {
        arrowSize:40,
        arrowOffset:30,
        
        dotWidth:30,
        dotHeight:6
      },
    },
  }}
>


    <Carousel effect="fade" arrows className='homeCarousel'> {/*prevArrow={<LeftSquareOutlined  style={{backgroundColor:"yellow",color:"yellow",width:"100px"}}/>} nextArrow={<RightSquareOutlined />} */}
    
    

   
      <div>
          <img src="https://media.istockphoto.com/id/1269580436/photo/sleeping-street-puppy-dogs.jpg?s=612x612&w=0&k=20&c=CkZ9loaJkuWQdb1ndAFevBJpounsyHtb6toGYCUM-RE=" alt="PetImage" width={"100%"} height={"auto"} object-fit={"cover"} />
      </div>
      <div>
          <img src="https://media.istockphoto.com/id/180722346/photo/cute-street-dog-in-agra.jpg?s=612x612&w=0&k=20&c=iFnk9BobdpT4OtPxHsnRChTIg9WiFh8dwj_uylT-JkI=" alt="PetImage" width={"100%"} height={"auto"} object-fit={"cover"} />
      </div>
      <div>
          <img src="https://media.istockphoto.com/id/1193747353/photo/indian-street-stray-dogs-with-ears-straight-upwards-and-frowned-with-anger-looking-at-camera.jpg?s=612x612&w=0&k=20&c=jOIpHNXia5EX72lcp4JfAhBFPTADjzMySCO652w7ydw=" alt="PetImage" width={"100%"} height={"auto"} object-fit={"cover"} />
      </div>
      <div>
          <img src="https://media.istockphoto.com/id/669485692/photo/sad-white-and-brown-stray-dog.jpg?s=612x612&w=0&k=20&c=35Nk_EslT1Dq-gaTSHraCGVQH7qVcvUcGrf50W0G6pY=" alt="PetImage" width={"100%"} height={"auto"} object-fit={"cover"} />
      </div>
      <div>
          <img src="https://static.vecteezy.com/system/resources/previews/019/426/952/non_2x/street-dog-sitting-on-the-dirt-portrait-landscape-cute-dog-close-up-with-a-blurry-background-multicolor-dog-sitting-and-looking-upside-asian-street-dog-close-up-portrait-shot-free-photo.jpg" alt="PetImage" width={"100%"} height={"auto"} object-fit={"cover"} />
      </div>

    
  </Carousel>


  </ConfigProvider>


  )
}

export default HomeCarousel