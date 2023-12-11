import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
   <>
    <div className='flex m-[5rem] justify-center items-center gap-[7rem]' >
<div className="left flex flex-col gap-8 justify-center items-start "> 
<h1 className=''>YOUR FEET <br />
DESERVE <br />
THE BEST</h1>

<p>  YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES <br /> .YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

<div className="btns flex gap-3">

<a href=""><button className='px-4 py-2 rounded-[3px] bg-red-600 text-white'>Shop now</button></a>
<a href=""><button className='px-4 py-2 rounded-[3px] bg-white border border-black '>Category</button></a>

</div>

<div className="shop">
<p>Also Available On</p>
<div className="imgs flex gap-3 p-4">
<img src="images/amazon.png" alt="logo" srcset="" />
<img src="images/flipkart.png" alt="logo" srcset="" />


</div>
</div>

</div>

<div className="right flex justify-center items-start ">
<img src="images/shoe_image.png" alt="logo" srcset="" />


</div>

    </div>
   </>
  )
}

export default Hero