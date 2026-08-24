import { Link } from "react-router-dom";
import "./Characters.css";

const base = import.meta.env.BASE_URL;

const characters = [
  {
    id: 1,
    name: "Malik",
    slug: "malik",
    category: "Fantasia / Personagem 3D",
    image: `${base}characters/malik.png`,
  },
  {
    id: 2,
    name: "Kaira",
    slug: "kaira",
    category: "Sci-fi / Character Design",
    image: `${base}characters/kaira.png`,
  },
  {
    id: 3,
    name: "Akari",
    slug: "akari",
    category: "Personagem 3D",
    image: `${base}characters/akari.png`,
  },
  {
    id: 4,
    name: "Zora",
    slug: "zora",
    category: "Cyberpunk / Character Design",
    image: `${base}characters/zora/zora-hero.png`,
  },
];

export default function Characters() {
  return (
    <main className="characters-page">
      <header className="characters-header">
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

      <section className="characters-hero">
        <span className="characters-label">
          PORTFÓLIO / CHARACTER ART
        </span>

        <h1>Personagens</h1>

        <p>
          Uma seleção de personagens desenvolvidos com foco em modelagem,
          design, materiais e identidade visual.
        </p>
      </section>

      <section className="characters-gallery">
        {characters.map((character, index) => (
          <Link
            to={`/characters/${character.slug}`}
            className="characters-card"
            key={character.id}
          >
            <div className="characters-card-image">
              <span className="characters-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <img
                src={character.image}
                alt={character.name}
              />
            </div>

            <div className="characters-card-info">
              <span>{character.category}</span>

              <div>
                <h2>{character.name}</h2>
                <span className="characters-arrow">↘</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}