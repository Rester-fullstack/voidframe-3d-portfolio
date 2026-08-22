import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      <header className="about-header">
        <Link to="/" className="logo">
          3D ARTIST
        </Link>

        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/characters">Personagens</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </header>

      <section className="about-hero">
        <div className="about-hero-left">
          <span className="about-label">03 / SOBRE</span>

          <h1>
            SOBRE
            <span>O ARTISTA.</span>
          </h1>

          <p className="about-role">
            Character Artist • 3D Designer • Game Art
          </p>
        </div>

        <div className="about-portrait">
          <div className="about-photo-placeholder">
            <span>FOTO DO DESIGNER</span>
          </div>
        </div>

        <div className="about-quote">
          <span>MANIFESTO</span>

          <p>
            “Não crio apenas personagens.
            <strong> Crio presença.</strong>”
          </p>
        </div>
      </section>

      <section className="about-biography">
        <div className="about-section-number">01</div>

        <div className="about-biography-content">
          <span className="about-small-label">BIOGRAFIA</span>

          <h2>
            Ideias transformadas
            <span>em personagens.</span>
          </h2>

          <p>
            Designer 3D focado em criação de personagens para jogos e
            experiências digitais. O trabalho combina modelagem, escultura,
            texturização e desenvolvimento visual para construir personagens
            com identidade, personalidade e presença.
          </p>

          <p>
            Cada projeto é desenvolvido buscando equilíbrio entre conceito,
            forma, materiais e narrativa visual.
          </p>
        </div>

        <div className="about-profile-data">
          <div>
            <span>FOCO</span>
            <p>Character Design</p>
          </div>

          <div>
            <span>ÁREA</span>
            <p>Game Art / 3D</p>
          </div>

          <div>
            <span>LOCALIZAÇÃO</span>
            <p>Brasil</p>
          </div>

          <div>
            <span>DISPONIBILIDADE</span>
            <p>Projetos & Freelance</p>
          </div>
        </div>
      </section>

      <section className="creative-experience">
        <div className="creative-heading">
          <span>02</span>

          <div>
            <span className="about-small-label">EXPERIÊNCIA CRIATIVA</span>
            <h2>Especialidades</h2>
          </div>
        </div>

        <div className="creative-list">
          <div className="creative-item">
            <span>01</span>
            <h3>Character Design</h3>
            <p>Criação visual e desenvolvimento de personagens.</p>
          </div>

          <div className="creative-item">
            <span>02</span>
            <h3>Modelagem 3D</h3>
            <p>Construção de formas, silhueta e estrutura tridimensional.</p>
          </div>

          <div className="creative-item">
            <span>03</span>
            <h3>Escultura Digital</h3>
            <p>Anatomia, formas orgânicas e refinamento de detalhes.</p>
          </div>

          <div className="creative-item">
            <span>04</span>
            <h3>Texturização</h3>
            <p>Materiais, superfícies, desgaste e identidade visual.</p>
          </div>

          <div className="creative-item">
            <span>05</span>
            <h3>Game Art</h3>
            <p>Personagens preparados para experiências digitais.</p>
          </div>
        </div>
      </section>

      <section className="about-manifesto">
        <span className="about-small-label">MINHA ABORDAGEM</span>

        <h2>
          TODO PERSONAGEM
          <span>COMEÇA COM UMA IDEIA.</span>
        </h2>

        <div className="manifesto-bottom">
          <p>
            O design transforma essa ideia em forma, personalidade e
            narrativa. Cada escolha — da silhueta ao material — ajuda a contar
            quem aquele personagem é.
          </p>

          <span className="manifesto-index">03</span>
        </div>
      </section>

      <section className="about-tools">
        <div className="tools-heading">
          <span>04</span>

          <div>
            <span className="about-small-label">FERRAMENTAS</span>
            <h2>Workflow</h2>
          </div>
        </div>

        <div className="about-tools-list">
          <div>
            <span>01</span>
            <h3>ZBrush</h3>
          </div>

          <div>
            <span>02</span>
            <h3>Blender</h3>
          </div>

          <div>
            <span>03</span>
            <h3>Substance Painter</h3>
          </div>

          <div>
            <span>04</span>
            <h3>Unreal Engine</h3>
          </div>

          <div>
            <span>05</span>
            <h3>Photoshop</h3>
          </div>
        </div>
      </section>

      <section className="about-process">
        <span className="about-small-label">PROCESSO CRIATIVO</span>

        <div className="process-flow">
          <div>
            <span>01</span>
            <h3>Conceito</h3>
          </div>

          <span className="process-arrow">→</span>

          <div>
            <span>02</span>
            <h3>Escultura</h3>
          </div>

          <span className="process-arrow">→</span>

          <div>
            <span>03</span>
            <h3>Modelagem</h3>
          </div>

          <span className="process-arrow">→</span>

          <div>
            <span>04</span>
            <h3>Textura</h3>
          </div>

          <span className="process-arrow">→</span>

          <div>
            <span>05</span>
            <h3>Render</h3>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div>
          <span>DISPONÍVEL PARA</span>
          <p>Freelance • Projetos • Colaborações • Oportunidades</p>
        </div>

        <Link to="/contact">
          Fale comigo
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}