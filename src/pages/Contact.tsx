import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <header className="contact-header">
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

      <section className="contact-hero">
        <div className="contact-intro">
          <span className="contact-label">04 / CONTATO</span>

          <h1>
            VAMOS CRIAR
            <span>ALGO JUNTOS.</span>
          </h1>

          <p>
            Tem um projeto, uma oportunidade ou quer conversar sobre
            character design e arte 3D? Entre em contato.
          </p>

          <div className="contact-links">
            <a href="mailto:seuemail@email.com">
              E-mail
              <span>↗</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              ArtStation
              <span>↗</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
              <span>↗</span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Instagram
              <span>↗</span>
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>

            <input
              id="name"
              type="text"
              placeholder="Seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Assunto</label>

            <select id="subject" defaultValue="">
              <option value="" disabled>
                Selecione um assunto
              </option>

              <option value="project">Projeto</option>
              <option value="job">Oportunidade</option>
              <option value="freelance">Freelance</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>

            <textarea
              id="message"
              rows={6}
              placeholder="Conte um pouco sobre o projeto..."
            />
          </div>

          <button type="submit" className="contact-submit">
            Enviar mensagem
            <span>↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}