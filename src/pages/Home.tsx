import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <header className="header">
        <a href="/" className="logo">
          3D ARTIST
        </a>

        <nav className="nav">
          <Link to="/characters">Personagens</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </header>

      <section className="hero" id="characters">
        <div className="hero-overlay" />


        <div className="hero-content">
          <span className="hero-label">DESIGN DE PERSONAGENS 3D</span>

          <h1 className="hero-title">
            PERSONAGENS
            <span>QUE GANHAM VIDA.</span>
          </h1>

          <p className="hero-description">
            Modelagem, escultura e texturização de personagens criados para
            jogos, cinematics e experiências digitais.
          </p>

          <a href="#projects" className="hero-button">
            Ver projetos
            <span>↘</span>
          </a>
        </div>

        <div className="hero-character">
          <img
            src="../characters/zora/zora-hero.png"
            alt="Personagem 3D em destaque"
          />
        </div>

        <div className="hero-footer">
          <span>CHARACTER ARTIST</span>
          <span>PORTFÓLIO 2026</span>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-heading">
          <div className="projects-heading-top">
            <span className="section-number">01</span>
            <span className="section-label">TRABALHOS SELECIONADOS</span>
          </div>

          <h2>Projetos em destaque</h2>
        </div>

        <div className="character-grid">
          <article className="character-card">
            <div className="character-image">
              <span className="character-number">01</span>

              <img
                src="../characters/malik.png"
                alt="Guerreiro do Norte"
              />
            </div>

            <div className="character-info">
              <span>FANTASIA / PERSONAGEM 3D</span>

              <div className="character-title-row">
                <h3>Guerreiro do Norte</h3>
                <span className="character-arrow">↘</span>
              </div>
            </div>
          </article>

          <article className="character-card">
            <div className="character-image">
              <span className="character-number">02</span>

              <img
                src="../characters/kaira.png"
                alt="Soldado Sci-fi"
              />
            </div>

            <div className="character-info">
              <span>SCI-FI / CHARACTER DESIGN</span>

              <div className="character-title-row">
                <h3>Soldado Sci-fi</h3>
                <span className="character-arrow">↘</span>
              </div>
            </div>
          </article>

          <article className="character-card">
            <div className="character-image">
              <span className="character-number">03</span>

              <img
                src="../characters/akari.png"
                alt="Samurai Vermelha"
              />
            </div>

            <div className="character-info">
              <span>PERSONAGEM 3D</span>

              <div className="character-title-row">
                <h3>Samurai Vermelha</h3>
                <span className="character-arrow">↘</span>
              </div>
            </div>
          </article>

          <article className="character-card">
            <div className="character-image">
              <span className="character-number">04</span>

              <img
                src="../characters/zora/zora-hero.png"
                alt="Zora"
              />
            </div>

            <div className="character-info">
              <span>CYBERPUNK / CHARACTER DESIGN</span>

              <div className="character-title-row">
                <h3>Zora</h3>
                <span className="character-arrow">↘</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}