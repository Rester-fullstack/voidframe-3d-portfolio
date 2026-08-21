import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import './App.css'
import ManifestoScene from './components/ManifestoScene'


function App() {

  const heroRef = useRef<HTMLElement>(null)

    const characters = [
    {
      id: 1,
      name: 'ZORA',
      role: 'CYBERPUNK CHARACTER',
      image: '/characters/zora-hero.png',
    },
    {
      id: 2,
      name: 'KAIRA',
      role: 'SCI-FI WARRIOR',
      image: '/characters/kaira.png',
    },
    {
      id: 3,
      name: 'AKARI',
      role: 'FANTASY ROGUE',
      image: '/characters/akari.png',
    },
    {
      id: 4,
      name: 'MALIK',
      role: 'ARCANE HUNTER',
      image: '/characters/malik.png',
    },
  ]

  const [activeCharacter, setActiveCharacter] = useState(0)

  const selectedCharacter = characters[activeCharacter]

  

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  })

  const characterX = useTransform(smoothX, [-0.5, 0.5], [-25, 25])
  const characterY = useTransform(smoothY, [-0.5, 0.5], [-15, 15])

  const titleX = useTransform(smoothX, [-0.5, 0.5], [8, -8])
  const titleY = useTransform(smoothY, [-0.5, 0.5], [5, -5])

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const element = heroRef.current

    if (!element) return

    const rect = element.getBoundingClientRect()

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }
    
  return (
    <main className="app">
      <header className="header">
        <div className="brand">
          <span className="brand-name">VOIDFRAME.</span>
          <span className="brand-role">3D CHARACTER ARTIST</span>
        </div>

        <nav className="nav">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#process">PROCESS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section
        ref={heroRef}
        className="hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-content">
          <span className="hero-index">01 / 04</span>

          <motion.h1
            className="hero-title"
            style={{
              x: titleX,
              y: titleY,
            }}
          >
            <span>CHARACTERS</span>
            <span>BUILT FOR</span>
            <span className="title-accent">NEW WORLDS.</span>
          </motion.h1>

          <div className="hero-meta">
            <p>3D CHARACTER ARTIST</p>
            <p>SCULPT · MODEL · TEXTURE · GAME READY</p>
          </div>

          <a href="#work" className="hero-button">
            EXPLORE CHARACTERS
            <span>↗</span>
          </a>
        </div>

       <motion.div
          className="hero-character"
          style={{
            x: characterX,
            y: characterY,
          }}
          
        >
          <motion.div
            className="character-image-wrapper"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="character-glow" />

            <img
              src="/characters/zora-hero.png"
              className="character-image"
              alt="Zora - Cyberpunk Character"
            />
          </motion.div>
          
          <div className="character-label">
            <span>ZORA</span>
            <small>CYBERPUNK CHARACTER</small>
          </div>
        </motion.div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </div>
      </section>

      <section id="work" className="manifesto-section">

        <ManifestoScene />
        
        <div className="manifesto-content">
          <span className="manifesto-index">02 / 04</span>

          <motion.h2
            className="manifesto-title"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>WE DON'T JUST</span>
            <span>MAKE CHARACTERS.</span>
            <span>WE BRING THEM</span>
            <span className="manifesto-accent">TO LIFE.</span>
          </motion.h2>

          <div className="manifesto-footer">
            <p>
              From sculpting and modeling to texturing and presentation,
              every character is built to feel part of a world.
            </p>

            <span>SCROLL ↓</span>
          </div>
        </div>

        <div className="manifesto-orbit manifesto-orbit-one" />
        <div className="manifesto-orbit manifesto-orbit-two" />
        <div className="manifesto-light" />
      </section>

      <section id="about" className="characters-section">
        <div className="characters-header">
          <div>
            <span className="section-index">03 / 04</span>
            <h2>SELECTED CHARACTERS</h2>
          </div>

          <span className="characters-count">04 CHARACTERS</span>
        </div>

        <div className="characters-layout">
          <div className="characters-list">

            {characters.map((character, index) => (
                <article
                  key={character.id}
                  className={`character-row ${
                    activeCharacter === index ? 'active' : ''
                  }`}
                  onMouseEnter={() => setActiveCharacter(index)}
                  onClick={() => setActiveCharacter(index)}
                >
                  <span className="character-number">
                    {String(character.id).padStart(2, '0')}
                  </span>

                  <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>{character.role}</p>
                  </div>

                  <div className="mobile-character-image">
                    <img
                      src={character.image}
                      alt={character.name}
                    />
                  </div>

                  <span className="character-arrow">↗</span>
                </article>
              ))}

          </div>

          <div className="characters-preview">
            <div className="preview-frame">
              <motion.img
                key={selectedCharacter.name}
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="preview-label">
                <span>
                  {String(selectedCharacter.id).padStart(2, '0')}
                </span>

                <div>
                  <strong>{selectedCharacter.name}</strong>
                  <small>{selectedCharacter.role}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-header">
          <div>
            <span className="section-index">04 / 05</span>
            <h2>FROM IDEA<br />TO GAME.</h2>
          </div>

          <p>
            A character development pipeline focused on form,
            personality, materials and game-ready presentation.
          </p>
        </div>

        <div className="process-list">
          {[
            {
              number: '01',
              title: 'CONCEPT',
              text: 'Defining silhouette, personality and visual direction.',
            },
            {
              number: '02',
              title: 'SCULPT',
              text: 'Building anatomy, primary forms and character details.',
            },
            {
              number: '03',
              title: 'RETOPOLOGY',
              text: 'Creating optimized geometry for a production-ready model.',
            },
            {
              number: '04',
              title: 'TEXTURE',
              text: 'Developing materials, surfaces, wear and visual identity.',
            },
            {
              number: '05',
              title: 'GAME READY',
              text: 'Final presentation prepared for real-time environments.',
            },
          ].map((step, index) => (
            <motion.article
              className="process-item"
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              <span className="process-arrow">↗</span>
            </motion.article>
          ))}
        </div>

        <div className="process-background-text">
          PIPELINE
        </div>
      </section>

      <section id="contact" className="section-placeholder">
        <span>CONTACT</span>
      </section>
    </main>
  )
}

export default App