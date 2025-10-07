import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const colors = [
  "hsl(250, 70%, 65%)", // brighter primary (purple)
  "hsl(200, 80%, 60%)", // blue - visible in both modes
  "hsl(160, 70%, 55%)", // teal/green - visible in both modes
  "hsl(280, 65%, 60%)", // violet - visible in both modes
  "hsl(340, 75%, 65%)", // pink/magenta - visible in both modes
]
const rand = (a, b) => a + Math.random() * (b - a)
const randPick = arr => arr[Math.floor(Math.random() * arr.length)]

// Generate position that avoids center area
function getPositionAvoidingCenter(isMobile = false, zLayer = 0) {
  const xRange = isMobile ? 4 : 8 // Smaller range on mobile
  const yRange = isMobile ? 2.5 : 4 // Smaller range on mobile
  const centerX = isMobile ? 2 : 3 // Smaller center area on mobile
  const centerY = isMobile ? 1.5 : 2 // Smaller center area on mobile
  
  const x = rand(-xRange, xRange)
  const y = rand(-yRange, yRange)
  
  // If position is too close to center, push it to edges
  if (Math.abs(x) < centerX && Math.abs(y) < centerY) {
    return [
      x > 0 ? rand(centerX + 0.5, xRange) : rand(-xRange, -centerX - 0.5), // push to left or right edge
      y > 0 ? rand(centerY + 0.5, yRange) : rand(-yRange, -centerY - 0.5), // push to top or bottom edge
      zLayer // Use specific Z layer instead of random
    ]
  }
  
  return [x, y, zLayer] // Use specific Z layer instead of random
}

function Shape({ position, shapeType, color, size, isMobile }) {
  const ref = useRef()
  
  const geometry = useMemo(() => {
    if (shapeType === "sphere") return new THREE.SphereGeometry(size, 32, 32)
    if (shapeType === "tetrahedron") return new THREE.TetrahedronGeometry(size)
    return new THREE.BoxGeometry(size, size, size)
  }, [shapeType, size])
  
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color }), [color])
  
  const phase = useMemo(() => Math.random() * Math.PI * 2, [])
  const speed = useMemo(() => rand(0.2, 0.6), [])
  const amp = useMemo(() => rand(isMobile ? 0.4 : 0.8, isMobile ? 0.8 : 1.5), [isMobile])

  useFrame(({ clock }, delta) => {
    if (!ref.current) return
    const t = clock.getElapsedTime() * speed + phase
    
    // Smooth floating movement
    ref.current.position.x = position[0] + Math.sin(t) * amp
    ref.current.position.y = position[1] + Math.cos(t * 1.1) * amp
    
    // Slow rotation
    ref.current.rotation.x += delta * 0.3
    ref.current.rotation.y += delta * 0.4
  })

  return <mesh ref={ref} position={position} geometry={geometry} material={material} />
}

export default function BackgroundFX() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Mobile if width < 768px
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const shapes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        position: getPositionAvoidingCenter(isMobile, -4 + i * 1.5), // Each shape gets a different Z layer
        shapeType: randPick(["box", "sphere", "tetrahedron"]),
        color: randPick(colors),
        size: rand(0.6, 1.2),
      })),
    [isMobile]
  )

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        {shapes.map((props, i) => (
          <Shape key={i} {...props} isMobile={isMobile} />
        ))}
      </Canvas>
    </div>
  )
}
