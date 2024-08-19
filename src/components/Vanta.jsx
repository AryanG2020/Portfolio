import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'

const VantaBirds = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x000000,
        color1: 0x5500ff,
        color2: 0xff00ff,
        colorMode: "variance",
        birdSize: 1.50,
        wingSpan: 30.00,
        separation: 53.00,
        alignment: 52.00,
        cohesion: 50.00,
        quantity: 3.00
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={myRef} style={{ width: '100%', height: '100vh' }} />
}

export default VantaBirds
