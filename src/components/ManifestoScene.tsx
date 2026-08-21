import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

type TouchPosition = {
  x: number
  y: number
}

function MainMesh({
  touch,
}: {
  touch: TouchPosition
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!mesh.current) return

    mesh.current.rotation.x += delta * 0.05
    mesh.current.rotation.y += delta * 0.09

    const pointerX =
      Math.abs(touch.x) > 0.01
        ? touch.x
        : state.pointer.x

    const pointerY =
      Math.abs(touch.y) > 0.01
        ? touch.y
        : state.pointer.y

    mesh.current.rotation.y +=
      (pointerX * 0.35 - mesh.current.rotation.y) * 0.018

    mesh.current.rotation.x +=
      (-pointerY * 0.22 - mesh.current.rotation.x) * 0.018
  })

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.2}
      floatIntensity={0.4}
    >
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.1, 2]} />

        <meshStandardMaterial
          color="#858585"
          emissive="#2a0b0b"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.35}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function InnerMesh({
  touch,
}: {
  touch: TouchPosition
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!mesh.current) return

    mesh.current.rotation.x -= delta * 0.07
    mesh.current.rotation.z += delta * 0.08

    const pointerX =
      Math.abs(touch.x) > 0.01
        ? touch.x
        : state.pointer.x

    const pointerY =
      Math.abs(touch.y) > 0.01
        ? touch.y
        : state.pointer.y

    mesh.current.position.x +=
      (pointerX * 0.15 - mesh.current.position.x) * 0.02

    mesh.current.position.y +=
      (pointerY * 0.12 - mesh.current.position.y) * 0.02
  })

  return (
    <mesh
      ref={mesh}
      scale={0.62}
    >
      <dodecahedronGeometry args={[2.1, 1]} />

      <meshStandardMaterial
        color="#301010"
        emissive="#6f1010"
        emissiveIntensity={0.35}
        metalness={0.65}
        roughness={0.42}
      />
    </mesh>
  )
}

function Ring({
  scale,
  rotation,
  speed,
}: {
  scale: number
  rotation: [number, number, number]
  speed: number
}) {
  const ring = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!ring.current) return

    ring.current.rotation.z += delta * speed
  })

  return (
    <mesh
      ref={ring}
      scale={scale}
      rotation={rotation}
    >
      <torusGeometry
        args={[
          2.7,
          0.012,
          8,
          100,
        ]}
      />

      <meshBasicMaterial
        color="#7a3030"
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function Particles() {
  const points = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const amount = 100
    const array = new Float32Array(amount * 3)

    for (
      let i = 0;
      i < array.length;
      i += 3
    ) {
      array[i] =
        (Math.random() - 0.5) * 9

      array[i + 1] =
        (Math.random() - 0.5) * 8

      array[i + 2] =
        (Math.random() - 0.5) * 5
    }

    return array
  }, [])

  useFrame((_, delta) => {
    if (!points.current) return

    points.current.rotation.y +=
      delta * 0.012

    points.current.rotation.x +=
      delta * 0.003
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#c84b4b"
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  )
}

function Scene({
  touch,
}: {
  touch: TouchPosition
}) {
  return (
    <>
      <ambientLight intensity={0.45} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={5}
        color="#ffffff"
      />

      <pointLight
        position={[-3, -2, 3]}
        intensity={45}
        color="#d82828"
        distance={10}
      />

      <pointLight
        position={[3, 1, 2]}
        intensity={15}
        color="#ffffff"
        distance={8}
      />

      <group
        rotation={[
          0.15,
          -0.2,
          0,
        ]}
      >
        <MainMesh touch={touch} />

        <InnerMesh touch={touch} />

        <Ring
          scale={1}
          rotation={[
            1.2,
            0.2,
            0,
          ]}
          speed={0.08}
        />

        <Ring
          scale={1.15}
          rotation={[
            0.4,
            1.1,
            0.7,
          ]}
          speed={-0.06}
        />

        <Ring
          scale={1.3}
          rotation={[
            0.9,
            -0.4,
            1.2,
          ]}
          speed={0.045}
        />
      </group>

      <Particles />
    </>
  )
}

export default function ManifestoScene() {
  const [touch, setTouch] =
    useState<TouchPosition>({
      x: 0,
      y: 0,
    })

  function handleTouchMove(
    event: React.TouchEvent<HTMLDivElement>,
  ) {
    const touchPoint =
      event.touches[0]

    if (!touchPoint) return

    const rect =
      event.currentTarget.getBoundingClientRect()

    const x =
      ((touchPoint.clientX -
        rect.left) /
        rect.width) *
        2 -
      1

    const y =
      -(
        ((touchPoint.clientY -
          rect.top) /
          rect.height) *
          2 -
        1
      )

    setTouch({
      x,
      y,
    })
  }

  function handleTouchEnd() {
    setTouch({
      x: 0,
      y: 0,
    })
  }

  return (
    <div
      className="manifesto-3d"
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1.5]}
      >
        <Scene touch={touch} />
      </Canvas>
    </div>
  )
}