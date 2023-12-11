import React from 'react'
import "./Nav.css"
const Navbar = () => {
  return (
  <>
  <nav className='  h-[4.5rem] flex  items-center justify-between p-6 px-[4rem]'>
<div className="logo">
    <img src="images/brand_logo.png" alt="logo" srcset="" />
</div>

<ul className="flex gap-7 font-bold text-xl">

<a href=""><li>Menu</li></a>
<a href=""><li>Location</li></a>
<a href=""><li>About</li></a>
<a href=""><li>Contact</li></a>


</ul> 

<a href=""><button className='px-4 py-2 rounded-[3px] bg-red-600 text-white'>Login</button></a>


  </nav>
  </>
  )
}

export default Navbar