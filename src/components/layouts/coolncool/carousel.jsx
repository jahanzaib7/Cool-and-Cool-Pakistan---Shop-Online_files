import React from 'react';
import "./carousel.css";
import Slider1 from "../../../assets/images/Slider1.png"
import Slider2 from "../../../assets/images/Slider2.png"
import Slider3 from "../../../assets/images/Slider3.png";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const WovistaCarousel = () => {

  
      

  return (
<>

<div class="CSSgal" style={{marginTop:76, height:"80%"}}>

  {/* <!-- Don't wrap targets in parent --> */}
  <s id="s1"></s> 
  <s id="s2"></s>
  <s id="s3"></s>
  {/* <s id="s4"></s> */}

  <div class="slider">
			<img src={Slider1} alt="Slider 1" />
	
    {/* <div style={{background:'#85b'}}> */}
			<img src={Slider2} alt="Slider 1" />
			{/* <h2>Slide 2</h2> */}
		{/* </div> */}
    {/* <div style={{background:'#e95'}}> */}
			<img src={Slider3} alt="Slider 1" />
			{/* <h2>Slide 3</h2> */}
		{/* </div> */}
    {/* <div style={{background:"#e59"}}>
			<h2>Slide 4</h2>
		</div> */}
  </div>
  
  <div class="prevNext">
    <div><a href="#s3"><FiChevronLeft color='#fff' fontSize={"35px"} /></a><a href="#s2"><FiChevronRight color='#fff' fontSize={"35px"} /></a></div>
    <div><a href="#s1"><FiChevronLeft color='#fff' fontSize={"35px"} /></a><a href="#s3"><FiChevronRight  color='#fff' fontSize={"35px"}/></a></div>
    <div><a href="#s2"><FiChevronLeft color='#fff' fontSize={"35px"} /></a><a href="#s1"><FiChevronRight color='#fff' fontSize={"35px"}/></a></div>
    {/* <div><a href="#s3"></a><a href="#s1"><FiChevronRight/></a></div> */}
  </div>

  <div class="bullets">
    <a href="#s1"></a>
    <a href="#s2"></a>
    <a href="#s3"></a>
    {/* <a href="#s4">4</a> */}
  </div>

</div>
</>
  )
}

export default WovistaCarousel