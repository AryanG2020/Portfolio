import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/technology'
import Work from './components/work'
import Project from './components/Project'
import Contact from "./components/Contact"
import VantaBirds from'./components/Vanta';
import { OrbitSpace } from 'orbit-space'




const App = () => {
  return (
    <OrbitSpace touchControls={true}  
    gyroControls={true}  
    scale={1.0}
    scaleMobile={1.0}>
    <div className='overflow-x-hidden text-neutral-300 antialiased selection bg-cy-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
      
      {/*<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>*/}
      </div>
     
      <div className='container mx-auto px-7'>
      <NavBar/>
      <Hero/>
      <About/>
      <Technology/>
      <Work/>
      <Project/>
      <Contact/>
      
      </div>
      
      
    </div>
    </OrbitSpace>
  )
}




/*constApp = () => {
  return (
    <OrbitSpace><div className='relative overflow-x-hidden text-neutral-300 antialiased selection bg-cy-300 selection:text-cyan-900'><div className="fixed top-0 -z-20 h-full w-full"><div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div></div><div className='container relative z-10 mx-auto px-7'><NavBar/><Hero/><About/><Technology/><Work/><Project/><Contact/></div></div></OrbitSpace>
  );
}
}*/



export default App
